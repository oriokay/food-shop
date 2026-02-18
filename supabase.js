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
            .insert([orderData])
            .select();
        
        if (error) throw error;
        
        // Add to order status
        await supabase
            .from('order_status')
            .insert([{
                order_id: data[0].id,
                status: 'pending'
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
                status: status
            }]);
        
        return { success: true };
    } catch (error) {
        console.error('Error updating order:', error);
        return { success: false, error: error.message };
    }
}
