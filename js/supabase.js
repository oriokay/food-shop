// Initialize Supabase client
const supabaseUrl = 'https://frsygwxoxigzslprgosd.supabase.co';
const supabaseKey = 'sb_publishable_h7ceqZWiwuTwJykoJYigrg_A7kG3LS2';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// Menu functions
async function loadMenuItems(category = null) {
    try {
        let query = supabase
            .from('menu_items')
            .select('*')
            .order('category');
        
        if (category) {
            query = query.eq('category', category);
        }
        
        const { data, error } = await query;
        
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error loading menu:', error);
        return [];
    }
}

// Order functions
async function placeOrder(orderData) {
    try {
        const { data, error } = await supabase
            .from('orders')
            .insert([{
                customer_name: orderData.customer_name,
                customer_phone: orderData.customer_phone,
                items: orderData.items,
                total_amount: orderData.total_amount,
                delivery_address: orderData.delivery_address,
                delivery_fee: orderData.delivery_fee,
                status: 'pending',
                language: orderData.language,
                created_at: new Date().toISOString()
            }])
            .select();
        
        if (error) throw error;
        
        // Add to order status
        await supabase
            .from('order_status')
            .insert([{
                order_id: data[0].id,
                status: 'pending',
                updated_at: new Date().toISOString()
            }]);
        
        return { success: true, order: data[0] };
    } catch (error) {
        console.error('Error placing order:', error);
        return { success: false, error: error.message };
    }
}

async function getOrders() {
    try {
        const { data, error } = await supabase
            .from('orders')
            .select('*')
            .order('created_at', { ascending: false });
        
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error loading orders:', error);
        return [];
    }
}

async function updateOrderStatus(orderId, status) {
    try {
        const { error } = await supabase
            .from('orders')
            .update({ status })
            .eq('id', orderId);
        
        if (error) throw error;
        
        // Add to status history
        await supabase
            .from('order_status')
            .insert([{
                order_id: orderId,
                status: status,
                updated_at: new Date().toISOString()
            }]);
        
        return { success: true };
    } catch (error) {
        console.error('Error updating order:', error);
        return { success: false, error: error.message };
    }
}

async function getTodayStats() {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const { data, error } = await supabase
            .from('orders')
            .select('*')
            .gte('created_at', today.toISOString());
        
        if (error) throw error;
        
        const totalOrders = data.length;
        const totalRevenue = data.reduce((sum, order) => sum + order.total_amount, 0);
        const uniqueCustomers = new Set(data.map(order => order.customer_phone)).size;
        const deliveryRevenue = data.reduce((sum, order) => sum + (order.delivery_fee || 0), 0);
        
        return {
            totalOrders,
            totalRevenue,
            uniqueCustomers,
            deliveryRevenue,
            orders: data
        };
    } catch (error) {
        console.error('Error getting today stats:', error);
        return {
            totalOrders: 0,
            totalRevenue: 0,
            uniqueCustomers: 0,
            deliveryRevenue: 0,
            orders: []
        };
    }
}
