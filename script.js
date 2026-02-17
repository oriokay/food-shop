-- Create menu_items table
CREATE TABLE menu_items (
    id SERIAL PRIMARY KEY,
    category VARCHAR(50) NOT NULL,
    name_fr TEXT NOT NULL,
    name_ar TEXT NOT NULL,
    description_fr TEXT,
    description_ar TEXT,
    price INTEGER NOT NULL,
    calories INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert your menu items
INSERT INTO menu_items (category, name_fr, name_ar, description_fr, description_ar, price, calories) VALUES
('boxes', 'Riz escalop salad oeuf', 'أرز إسكالوب سلطة بيض', 'Riz avec escalope, salade et œuf', 'أرز مع إسكالوب وسلطة وبيض', 350, 720),
('boxes', 'Pasta escalop salad', 'باستا إسكالوب سلطة', 'Pâtes avec escalope et salade', 'معكرونة مع إسكالوب وسلطة', 400, 750),
('boxes', 'Soup citrouille avec un toast', 'شوربة قرع مع توست', 'Soupe de citrouille servie avec un toast', 'شوربة قرع تقدم مع توست', 450, 500),
('boxes', 'Bourgouil au poulet', 'برغل بالدجاج', 'Boulgour au poulet', 'برغل بالدجاج', 450, 640),
('boxes', 'Salad Cesar', 'سلطة سيزر', 'Salade César classique', 'سلطة سيزر كلاسيكية', 300, 550),
('boxes', 'Salad thon oeuf', 'سلطة تونة بيض', 'Salade de thon avec œuf', 'سلطة تونة مع بيض', 400, 580),
('drinks', 'Jus banan date', 'عصير موز تمر', 'Jus naturel de banane et datte', 'عصير طبيعي من الموز والتمر', 300, NULL),
('drinks', 'Vishy', 'فيشي', 'Eau minérale Vishy', 'مياه معدنية فيشي', 70, NULL),
('drinks', 'Bouteille d''eau', 'قنينة ماء', 'Bouteille d''eau minérale', 'قنينة ماء معدني', 40, NULL),
('supplements', 'Œuf supplémentaire', 'بيض إضافي', 'Ajouter un œuf supplémentaire', 'إضافة بيضة إضافية', 50, NULL),
('supplements', 'Escalop supplémentaire', 'إسكالوب إضافي', 'Ajouter une escalope supplémentaire', 'إضافة إسكالوب إضافي', 50, NULL);

-- Create orders table
CREATE TABLE orders (
    id VARCHAR(20) PRIMARY KEY,
    customer_name TEXT NOT NULL,
    customer_phone TEXT NOT NULL,
    delivery_type TEXT NOT NULL,
    delivery_address TEXT,
    items JSONB NOT NULL,
    total INTEGER NOT NULL,
    notes TEXT,
    status TEXT DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact_messages table
CREATE TABLE contact_messages (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create admin_users table
CREATE TABLE admin_users (
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies (allow all operations for now - you can tighten this later)
CREATE POLICY "Allow public read access" ON menu_items FOR SELECT USING (true);
CREATE POLICY "Allow public insert" ON orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert" ON contact_messages FOR INSERT WITH CHECK (true);
