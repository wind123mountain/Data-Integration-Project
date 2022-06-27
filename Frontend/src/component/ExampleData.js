const SLIDER_DATA = [
    {
        'id': 1,
        'phone_img': 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-4_2_1.jpg',
        'store_logo': require('../asset/logo/cellphones-logo.png'),
        'phone_name': 'iPhone 13 Pro Max 256GB I Chính hãng VN/A',
        'price': '30.690.000 đ',
        'promotions': ['Thu cũ lên đời - Trợ giá 1 triệu', 
        'Nhập mã CPSONL500 - Giảm thêm 500k khi thanh toán qua VNPay trên website hoặc CPS500 qua QR Offline tại cửa hàng', 
        'Giảm thêm tới 1% cho thành viên Smember (áp dụng tùy sản phẩm)',
        'Nhập QRCPS giảm đến 300.000đ áp dụng các đơn hàng từ 4 triệu trở lên khi thanh toán qua VNPAY tại cửa hàng']
    },
    {
        'id': 2,
        'phone_img': 'https://cdn.tgdd.vn/Products/Images/42/250261/Slider/iphone-13-pro-max-256gb637698376654304678.jpg',
        'store_logo': require('../asset/logo/dienmayxanh.png'),
        'phone_name': 'Điện thoại iPhone 13 Pro Max 256GB',
        'price': '30.890.000 đ',
        'promotions': ['Giảm giá 50% gói bảo hành mở rộng thêm 1 năm (chính hãng)',
                        'Giảm đến 1,500,000đ khi Thu cũ Đổi mới (tùy model máy cũ; không áp dụng kèm giảm giá qua VNPAY, Moca)',
                    'Giảm giá 25% iPad Pro M1 12.9" (2021) khi mua kèm iPhone (Không áp dụng kèm khuyến mãi khác của iPad)',
                'Giảm 50% giá gói cước 1 năm (Vina350/Vina500) cho Sim VinaPhone trả sau (Trị giá đến 3 triệu)',
            'Giảm đến 500.000đ khi thanh toán quét QRcode qua App của ngân hàng.']
    },
    {
        'id': 3,
        'phone_img': 'https://images.fpt.shop/unsafe/fit-in/665x374/filters:quality(100):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/26/637865651644687896_iphone-13-pro-max-IP68-chong-nuoc.png',
        'store_logo': require('../asset/logo/fpt.jpg'),
        'phone_name': 'iPhone 13 Pro Max 256GB',
        'price': '30.890.000 đ',
        'promotions': ['Giảm ngay 6.100.000đ áp dụng đến 30/06 ', 
                    'Bảo hành 2 năm chính hãng',
                'Giảm 50% eSIM MobiFone Big Data 1T - 6GB/ ngày - miễn phí tháng đầu - giá chỉ 165.000đ',
            'Giảm 50% eSIM MobiFone Triệu Phú Data 1T - 2.5GB/ ngày - miễn phí tháng đầu - giá chỉ 135.000đ']
    },
    {
        'id': 4,
        'phone_img': 'https://salt.tikicdn.com/cache/400x400/ts/product/f6/b9/65/00f28495008b1d5c60f769ed9a1a0eb2.jpg.webp',
        'store_logo': require('../asset/logo/tiki.jpg'),
        'phone_name': 'Apple iPhone 13 Pro Max',    
        'price': '30.490.000 đ',
        'promotions': ['Hoàn tới ~1.528.975đ cho thành viên SEP']
    },
]


const CONTENT_DATA = [
    {
        'name_store': 'Điện máy xanh',
        'phone_name': 'Điện thoại Samsung Galaxy S22 Ultra 5G 128GB',
        'address': 'Hồ Chí Minh',
        'price': '27.990.000 đ',
    },
    {
        'name_store': 'Điện máy xanh',
        'phone_name': 'Điện thoại Samsung Galaxy S22 Ultra 5G 128GB',
        'address': 'Hà Nội',
        'price': '27.990.000 đ',
    },
    {
        'name_store': 'Điện máy xanh',
        'phone_name': 'Điện thoại Samsung Galaxy S22 Ultra 5G 128GB',
        'address': 'Bắc Ninh',
        'price': '27.990.000 đ',
    },
    {
        'name_store': 'Tiki',
        'phone_name': 'Điện thoại Samsung Galaxy S22 Ultra 5G (8GB/128GB) - Hàng Chính Hãng',
        'address': 'Không có thông tin',
        'price': '29.290.000 đ',
    },
    {
        'name_store': 'Cellphone',
        'phone_name': 'Samsung Galaxy S22 Ultra (8GB - 128GB)',
        'address': 'Miền Bắc',
        'price': '24.190.000 đ',
    },
    {
        'name_store': 'Cellphone',
        'phone_name': 'Samsung Galaxy S22 Ultra (8GB - 128GB)',
        'address': 'Miền Trung',
        'price': '24.190.000 đ',
    },
    {
        'name_store': 'Cellphone',
        'phone_name': 'Samsung Galaxy S22 Ultra (8GB - 128GB)',
        'address': 'Miền Nam',
        'price': '24.190.000 đ',
    },

]


const DETAIL_DATA = {
        'Thương hiệu': 'iphone',
        'CPU': 'Apple A14 Bionic (5nm)',
        'Camera trước': '12MP',
        'RAM': '6GB',
        'Bộ nhớ trong': '128GB',
        'Hệ điều hành': 'iOS 14'
    }

export { SLIDER_DATA as phone_data }
export { CONTENT_DATA as content_data}
export { DETAIL_DATA as detail_data}

