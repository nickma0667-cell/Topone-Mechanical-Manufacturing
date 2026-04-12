// Internationalization (i18n) Module
// Supports English and Chinese language switching

const I18n = {
    // Current language
    currentLang: localStorage.getItem('siteLanguage') || 'en',

    // Translations data
    translations: {
        en: {
            // Navigation
            'nav_home': 'Home',
            'nav_about': 'About',
            'nav_product': 'Product',
            'nav_equipment': 'Equipment',
            'nav_partnership': 'Partnership',
            'nav_contact': 'Contact',

            // Top bar
            'set_homepage': 'Set Homepage',
            'favorite': 'Favorite',
            'lang_en': 'English',
            'lang_cn': '中文',

            // Company info
            'company_name_cn': '拓丰机械制造',
            'company_name_en': 'Topone Mechanical Manufacturing',
            'tel': 'TEL',

            // Footer
            'copyright': '©2026 Topone Mechanical Manufacturing copyright',
            'login': 'Login',

            // Home page
            'home_banner_title': 'Professional Casting Solutions',
            'home_banner_subtitle': 'Your Trusted Partner in Mechanical Manufacturing',
            'home_about_title': 'About Us',
            'home_about_desc': 'Topone Mechanical Manufacturing specializes in various casting processes including sand casting, investment casting, and gravity casting. We provide high-quality products for automotive, railway, and industrial applications.',
            'home_partner_desc': 'For more than 20 years we have been the main supplier of SILAR R.S.L. in Italy and KUHN S.A. in France. Our quality is reliable and the further cooperation is promising.',
            'home_hotline': 'Hotline: +86 139 0610 7239',
            'home_wax_title': 'Wax Moldings',
            'home_read_more': 'Read More',
            'home_products_title': 'Our Products',
            'home_products_desc': 'We offer a wide range of casting products including auto parts, railway components, and industrial equipment parts.',
            'home_view_all': 'View All Products',
            'home_technics_title': 'Introduction of Technics',
            'home_technics_desc': 'Our advanced manufacturing techniques ensure the highest quality standards for all our products.',
            'home_learn_more': 'Learn More',
            'home_partners_title': 'Our Partners',
            'home_partners_desc': 'We are proud to work with leading companies worldwide.',

            // About page
            'about_title': 'About Us',
            'about_company_profile': 'Company Profile',
            'about_company_intro': 'About Topone Mechanical Manufacturing',
            'about_description': 'As a leader in the manufacturing industry, Topone Mechanical Manufacturing has a wealth of knowledge and expertise in the metal casting industry. We utilize this experience to provide the best quality and innovative products to the global market.',
            'about_founded': 'Founded',
            'about_employees': 'Employees',
            'about_products_count': 'Products',
            'about_countries': 'Countries',
            'about_founded_value': '2010',
            'about_employees_value': '200+',
            'about_products_value': '500+',
            'about_countries_value': '30+',
            'about_foundry_details': 'Foundry Details',
            'about_equipment': 'Production Equipment',
            'about_quality': 'Quality Assurance',
            'about_capacity': 'Production Capacity',
            'about_equipment_desc': 'Our factory is equipped with state-of-the-art casting equipment including CNC machines, automatic molding lines, and heat treatment facilities.',
            'about_quality_desc': 'We have implemented a comprehensive quality management system with ISO 9001 certification. All products undergo strict quality inspection.',
            'about_capacity_desc': 'Our monthly production capacity is exceeding 400 tons with truthful reliability. There are 4 types of typical materials we can produce: Carbon Alloy, Heat-Resistant Steel, Stainless Steel, and Aluminum Alloy.',
            'about_partner_desc': 'For more than 20 years we have been the main supplier of SILAR R.S.L. in Italy and KUHN S.A. in France. Our quality is reliable and the further cooperation is promising.',
            'about_capacity_label': 'Production Capacity:',
            'about_capacity_value': '400 Tons Per Month',
            'about_casting_size_label': 'Casting Size:',
            'about_casting_size_value': '100mm - 1500mm',
            'about_company_size_label': 'Company Size:',
            'about_company_size_value': '80 Workers & 10 technicians',
            'about_heat_treatment': 'Heat Treatment',
            'about_surface': 'Surface Machining',
            'about_materials': 'Functional Materials',
            'about_steel_grade': '1. Steel Grade Range:',
            'about_carbon_alloy': 'Carbon Alloy Steel',
            'about_refractory': 'Refractory Steel',
            'about_stainless': 'Stainless Steel',
            'about_iron_grade': '2. Iron Grade Range:',
            'about_crude_iron': 'Crude Iron',
            'about_ductile_iron': 'Ductile Iron',
            'about_aluminum': '3. Aluminum Alloy',
            'about_functional_castings': 'Functional Castings',
            'about_quality_control': 'Quality Control:',
            'about_xray': 'X-Ray Tests',
            'about_mpi': 'Magnetic Powder Detector (MPI)',
            'about_ut': 'Ultrasonic Test (UT)',
            'about_hardness': 'Hardness Test',
            'about_spectrometer': 'Spectrometer',
            'about_metallographic': 'Metallographic Analysis',
            'about_tensile': 'Tensile Strength Test',
            'about_impact': 'Impact Test',
            'about_certification': 'Certification:',

            // Product page
            'product_title': 'Product',
            'product_filter': 'Filter',
            'product_showcase': 'Product Showcase',
            'product_prev': 'Prev',
            'product_next': 'Next',
            'product_detail': 'Product Detail',
            'product_share': 'Share to:',
            'product_no_products': 'No products found in this category.',
            'product_list_end': 'to the end ~',
            'product_category': 'Category',
            'product_delete': '[Delete]',
            'product_slide': 'Slide',
            'product_price_label': 'Price: ',

            // Equipment page
            'equipment_title': 'Equipment',
            'equipment_online_service': 'Online Service',
            'equipment_qr_text': 'Get wechat QR code',
            'scan_qrcode': 'Scan QRcode',
            'equipment_quality': 'Devices For Quality Assurance',
            'equipment_quality_assurance': 'Quality Assurance',
            'equipment_production_equipment': 'Production Equipment',
            'equipment_quality_control': 'Quality Control',
            'equipment_testing': 'Testing Equipment',
            'equipment_facilities': 'Our Facilities',
            'equipment_facilities_desc': 'We have invested heavily in modern production equipment to ensure product quality and production efficiency.',
            'equipment_cnc': 'CNC Machining Center',
            'equipment_cnc_desc': 'High-precision CNC machines for complex parts machining.',
            'equipment_molding': 'Automatic Molding Line',
            'equipment_molding_desc': 'Efficient automatic molding system for mass production.',
            'equipment_heat': 'Heat Treatment Furnace',
            'equipment_heat_desc': 'Advanced heat treatment facilities for material property enhancement.',

            // About page specific
            'about_work_time': 'Work Time',
            'about_work_time_weekday': 'Mon to Fri : 8:30-17:30',
            'about_work_time_weekend': 'Sat to Sun : 9:00-17:00',
            'about_manager': 'General Manager:',
            'about_eu_agent': 'European Agent:',
            'about_sales': 'Sales Representative:',
            'contact_manager_name': 'Commons Ma',
            'contact_eu_agent_name': 'Jean Rossi',
            'contact_sales_name': 'Nick Ma',

            // Equipment names
            'equip_3d': '3D Coordinate Measurement',
            'equip_magnetic': 'Magnetic Particle Inspector',
            'equip_ultrasonic_large': 'Large Ultrasonic Flaw Detector',
            'equip_ultrasonic_portable': 'Portable Ultrasonic Flaw Detector',
            'equip_microscope': 'Metallurgical Microscope',
            'equip_tensile': 'Tensile Strength Tester',
            'equip_hardness': 'Hardness Tester',
            'equip_spectrometer': 'German Spectrometer',
            'equip_impact': 'Impact Testing Machine',
            'equip_die_casting': 'Die Casting Machine for Aluminum',
            'equip_quenching': 'Quenching Furnace',
            'equip_tempering': 'Tempering Furnace',
            'equip_normalizing': 'Normalisation Furnace',
            'equip_shot': 'Shot Blasting Equipment',
            'equip_cutting': 'Electric Saw Cutting Machine',

            // Partnership page
            'partnership_title': 'Partnership',
            'partner_sncf': 'Société nationale des chemins de fer français',
            'partner_sncf_desc': 'The Largest Railway Company in France',
            'partner_silar': 'SILAR S.R.L',
            'partner_silar_desc': 'A famous Italian Machining Company',
            'partner_crec': 'China Railway Engineering Company',
            'partner_crec_desc': 'The Largest Railway Company in China',
            'partner_kuhn': 'KUHN S.A.',
            'partner_kuhn_desc': 'A Global Leader in Agricultural Machinery',
            'more': 'MORE',
            'partnership_online_service': 'Online Service',
            'partnership_our_partners': 'Our Partners',
            'partnership_desc': 'We have established long-term partnerships with leading companies worldwide. Together, we create value and drive innovation.',
            'partnership_benefits': 'Partnership Benefits',
            'partnership_quality': 'Quality Assurance',
            'partnership_delivery': 'On-time Delivery',
            'partnership_support': 'Technical Support',
            'partnership_quality_desc': 'Consistent high-quality products meeting international standards.',
            'partnership_delivery_desc': 'Reliable delivery schedule to meet your production needs.',
            'partnership_support_desc': 'Professional technical team providing comprehensive support.',

            // Contact page
            'contact_title': 'Contact',
            'contact_online_service': 'Online Service',
            'contact_info': 'Contact Information',
            'contact_address': 'Address',
            'contact_phone': 'Phone',
            'contact_email': 'Email',
            'contact_address_value': 'Industrial Zone, Zhangjiagang City, Jiangsu Province, China',
            'contact_form_title': 'Send us a Message',
            'contact_name': 'Your Name',
            'contact_email_input': 'Your Email',
            'contact_subject': 'Subject',
            'contact_message': 'Message',
            'contact_submit': 'Send Message',
            'contact_meeting': 'Schedule a Meeting',
            'contact_meeting_desc': 'We welcome you to visit our factory and discuss cooperation opportunities.',

            // Menu
            'menu_title': 'Menu',

            // Product categories
            'cat_permanent_mold': 'Permanent Mold Castings',
            'cat_ludox': 'Ludox Precision Mouldings',
            'cat_crystal_sand': 'Crystal Sand Castings',
            'cat_lost_wax': 'Lost Wax Mouldings',
            'cat_gravity': 'Gravity Casting',
            'cat_resin_shell': 'Resin Shell Moulding',

            // Technics page specific
            'technics_title': 'Technic Intro',
            'technics_intro': 'Technic Intro',
            'technic_centrifugal_title': 'Centrifugal Casting',
            'technic_centrifugal_desc': '<p><strong>Centrifugal casting</strong> or <strong>rotocasting</strong> is a casting technique that is typically used to cast thin-walled cylinders. It is typically used to cast materials such as metals, glass, and concrete. A high quality is attainable by control of metallurgy and crystal structure. Unlike most other casting techniques, centrifugal casting is chiefly used to manufacture rotationally symmetric stock materials in standard sizes for further machining, rather than shaped parts tailored to a particular end-use.</p><p>Typical parts made by this process are pipes, flywheels, cylinder liners, and other parts that are axi-symmetric. It is notably used to cast cylinder liners and sleeve valves for piston engines, parts which could not be reliably manufactured otherwise.</p>',
            'technic_investment_title': 'Investment Moulding',
            'technic_lostfoam_title': 'Lost Foam Casting',
            'technic_die_title': 'Die Casting',
            'technic_permanent_title': 'Permanent Mold Casting',
            'technic_sand_title': 'Sand Casting',
            'technic_advantages': 'Advantages',
            'technic_disadvantages': 'Disadvantages',
            'technic_centrifugal_advantages': '<p>Cylinders and shapes with rotational symmetry are most commonly cast by this technique. Long castings are often produced with the long axis parallel to the ground rather than standing up in order to distribute the effect of gravity evenly.</p><p>Thin-walled cylinders are difficult to cast by other means. Centrifugal casting is particularly suited as they behave in the manner of shallow flat castings relative to the direction of the centrifugal force.</p><p>Centrifugal casting is also used to manufacture disk and cylinder shaped objects such as railway carriage wheels or machine fittings where grain, flow, and balance are important to the durability and utility of the finished product.</p><p>Noncircular shapes may also be cast providing the shape is relatively constant in radius.</p>',
            'technic_centrifugal_disadvantages': '<p>The surface of mouldings is typically rough without accurate tolerance nor fine quality. The technic is unaccessible for heavy metals or alloys.</p>'
        },
        cn: {
            // Navigation
            'nav_home': '首页',
            'nav_about': '关于我们',
            'nav_product': '产品展示',
            'nav_equipment': '设备展示',
            'nav_partnership': '合作商',
            'nav_contact': '联系方式',

            // Top bar
            'set_homepage': '设为首页',
            'favorite': '收藏本站',
            'lang_en': 'English',
            'lang_cn': '中文',

            // Company info
            'company_name_cn': '拓丰机械制造',
            'company_name_en': 'Topone Mechanical Manufacturing',
            'tel': '电话',

            // Footer
            'copyright': '©2026 拓丰机械制造 版权所有',
            'login': '登录',

            // Home page
            'home_banner_title': '专业铸造解决方案',
            'home_banner_subtitle': '您值得信赖的机械制造合作伙伴',
            'home_about_title': '公司简介',
            'home_about_desc': '拓丰机械制造在金属铸造行业拥有丰富的经验和专业知识，从业20年以上，为全球采购商提供最优质的铸造服务。',
            'home_partner_desc': '我们的月生产能力超过400吨，安全可靠。\n我们的三种主打产品：碳合金钢、耐火钢和不锈钢。',
            'home_hotline': '咨询热线：+86 139 0610 7239',
            'home_wax_title': '蜡模展示',
            'home_read_more': '了解更多',
            'home_products_title': '我们的产品',
            'home_products_desc': '我们提供广泛的铸造产品，包括汽车零部件、铁路组件和工业设备配件。',
            'home_view_all': '查看全部产品',
            'home_technics_title': '工艺介绍',
            'home_technics_desc': '我们先进的制造技术确保所有产品的最高质量标准。',
            'home_learn_more': '了解更多',
            'home_partners_title': '合作伙伴',
            'home_partners_desc': '我们很荣幸与全球领先企业合作。',

            // About page
            'about_title': '关于我们',
            'about_company_profile': '公司简介',
            'about_company_intro': '企业简介',
            'about_description': '拓丰机械制造有限公司是以精密铸造,砂型铸造,不锈钢精密铸造,铝合金铸造 ,失蜡铸造,球墨铸造等铸造手法为业务核心的企业，为国内外多家知名企业提供专业的铸件生产和后加工服务，主要生产机械设备配件、汽摩配件、火车零件等铸件，公司拥有雄厚的技术实力和丰富的生产经验，月产量达到400吨以上。',
            'about_founded': '成立时间',
            'about_employees': '员工数量',
            'about_products_count': '产品种类',
            'about_countries': '服务国家',
            'about_founded_value': '2010年',
            'about_employees_value': '200+',
            'about_products_value': '500+',
            'about_countries_value': '30+',
            'about_foundry_details': '铸造详情',
            'about_equipment': '生产设备',
            'about_quality': '质量保证',
            'about_capacity': '生产能力',
            'about_equipment_desc': '我们的工厂配备了最先进的铸造设备，包括数控机床、自动造型线和热处理设施。',
            'about_quality_desc': '我们实施了全面的质量管理体系，通过了ISO 9001认证。所有产品都经过严格的质量检验。',
            'about_capacity_desc': '我们可以根据客户的要求，来样，来图进行模具的设计和产品的生产，做出各种毛胚件和成品件。我们配套了抛丸机，喷砂机，热处理机器多台，CNC数控加工中心，铣床等设备。 我们的产品经机加工后表面无疏松，夹渣，砂眼等不良现象，深受客户的认可和好评。',
            'about_partner_desc': '我司长期与法国国家铁路公司，意大利Silar公司，法国Kuhn公司，中国铁路集团等保持良好合作关系，产品质量获ISO 9001国际质量认证，值得信赖。\n\n 我们将本着合理的价格、准时的货期、完善的售后服务，期待着与您建立长期、稳定的合作伙伴关系，我们将用每一个实际行动树立良好的形象，展望未来，零距离诚邀您携手共进、共创美好未来。\n\n 热诚欢迎海内外客户前来参观、考察、来电，洽谈业务，谢谢。',

            // Product page
            'product_title': '产品中心',
            'product_filter': '产品筛选',
            'product_showcase': '产品展示',
            'product_prev': '上一页',
            'product_next': '下一页',
            'product_detail': '产品详情',
            'product_share': '分享到：',
            'product_no_products': '该分类下暂无产品。',
            'product_list_end': '到底了 ~',
            'product_category': '分类',
            'product_delete': '[删除]',
            'product_slide': '幻灯片',
            'product_price_label': '价格：',

            // Equipment page specific
            'equipment_title': '设备展示',
            'equipment_online_service': '在线服务',
            'equipment_quality_assurance': '质量保证',
            'equipment_production_equipment': '生产设备',
            'equipment_quality_control': '质量控制',
            'equipment_testing': '检测设备',
            'equipment_facilities': '我们的设施',
            'equipment_facilities_desc': '我们投入巨资引进现代化生产设备，确保产品质量和生产效率。',
            'equipment_cnc': '数控加工中心',
            'equipment_cnc_desc': '高精度数控机床，用于复杂零件加工。',
            'equipment_molding': '自动造型线',
            'equipment_molding_desc': '高效的自动造型系统，适用于大批量生产。',
            'equipment_heat': '热处理炉',
            'equipment_heat_desc': '先进的热处理设施，提升材料性能。',

            // Partnership page
            'partnership_title': '合作伙伴',
            'partnership_online_service': '在线服务',
            'partnership_our_partners': '我们的合作伙伴',
            'partnership_desc': '我们与全球领先企业建立了长期合作关系。共同创造价值，推动创新。',
            'partnership_benefits': '合作优势',
            'partnership_quality': '质量保证',
            'partnership_delivery': '准时交付',
            'partnership_support': '技术支持',
            'partnership_quality_desc': '始终如一的高质量产品，符合国际标准。',
            'partnership_delivery_desc': '可靠的交付时间表，满足您的生产需求。',
            'partnership_support_desc': '专业技术团队提供全面支持。',

            // Contact page
            'contact_title': '联系我们',
            'contact_online_service': '在线服务',
            'contact_info': '联系信息',
            'contact_address': '地址',
            'contact_phone': '电话',
            'contact_email': '邮箱',
            'contact_address_value': '江苏省张家港市工业区',
            'contact_form_title': '给我们留言',
            'contact_name': '您的姓名',
            'contact_email_input': '您的邮箱',
            'contact_subject': '主题',
            'contact_message': '留言内容',
            'contact_submit': '发送消息',
            'contact_meeting': '预约参观',
            'contact_meeting_desc': '我们欢迎您来厂参观，探讨合作机会。',

            // Menu
            'menu_title': '菜单',

            // Product categories
            'cat_permanent_mold': '金属型铸造',
            'cat_ludox': '硅溶胶精密铸造',
            'cat_crystal_sand': '树脂砂铸造',
            'cat_lost_wax': '失蜡铸造',
            'cat_gravity': '重力铸造',
            'cat_resin_shell': '树脂壳型铸造',

            // About page specific
            'about_work_time': '工作时间',
            'about_work_time_weekday': '周一至周五：8:30-17:30',
            'about_work_time_weekend': '周六至周日：9:00-17:00',
            'about_manager': '中国地区联系人',
            'about_eu_agent': '欧洲业务总代理',
            'about_sales': '海外业务商务代表',
            'contact_manager_name': '马康明',
            'contact_eu_agent_name': 'Jean Rossi',
            'contact_sales_name': '马万鹏',
            'about_capacity_label': '生产能力：',
            'about_capacity_value': '每月400吨',
            'about_casting_size_label': '铸件尺寸：',
            'about_casting_size_value': '100mm - 1500mm',
            'about_company_size_label': '公司规模：',
            'about_company_size_value': '80名工人和10名技术人员',
            'about_heat_treatment': '热处理',
            'about_surface': '表面加工',
            'about_materials': '功能材料',
            'about_steel_grade': '1. 钢种范围：',
            'about_carbon_alloy': '碳合金钢',
            'about_refractory': '耐火钢',
            'about_stainless': '不锈钢',
            'about_iron_grade': '2. 铁种范围：',
            'about_crude_iron': '生铁',
            'about_ductile_iron': '球墨铸铁',
            'about_aluminum': '3. 铝合金',
            'about_functional_castings': '功能铸件',
            'about_quality_control': '质量控制：',
            'about_xray': 'X射线检测',
            'about_mpi': '磁粉探伤（MPI）',
            'about_ut': '超声波检测（UT）',
            'about_hardness': '硬度测试',
            'about_spectrometer': '光谱仪',
            'about_metallographic': '金相分析',
            'about_tensile': '拉伸强度测试',
            'about_impact': '冲击测试',
            'about_certification': '认证：',

            // Equipment page specific
            'equipment_qr_text': '获取微信二维码',
            'scan_qrcode': '扫描二维码',
            'equipment_quality': '质量保证设备',
            'equipment_production': '生产设备',
            'equip_3d': '三维坐标测量仪',
            'equip_magnetic': '磁粉探伤仪',
            'equip_ultrasonic_large': '超声波探伤仪',
            'equip_ultrasonic_portable': '便携式超声波探伤仪',
            'equip_microscope': '金相分析仪',
            'equip_tensile': '抗拉强度测量仪',
            'equip_hardness': '硬度测量仪',
            'equip_spectrometer': '德产光谱仪',
            'equip_impact': '冲击试验机',
            'equip_die_casting': '铝合金压铸机',
            'equip_quenching': '淬火炉',
            'equip_tempering': '回火炉',
            'equip_normalizing': '正火炉',
            'equip_shot': '抛丸机',
            'equip_cutting': '切割机',

            // Partnership page specific
            'partner_sncf': '法国国家铁路公司',
            'partner_sncf_desc': '法国最大的铁路公司\n 欧洲第二大铁路公司',
            'partner_silar': 'SILAR S.R.L',
            'partner_silar_desc': '著名的意大利机加工企业',
            'partner_crec': '中国中铁',
            'partner_crec_desc': '中国最大的铁路公司\n 世界500强企业',
            'partner_kuhn': '库恩公司',
            'partner_kuhn_desc': '法国领先的农业机械制造商',
            'more': '更多',

            // Contact page specific
            'contact_send_message': '留言提交：',
            'contact_message_placeholder': '消息将在确认后显示',

            // Technics page specific
            'technics_title': '工艺介绍',
            'technics_intro': '工艺介绍',
            'technic_centrifugal_title': '离心铸造',
            'technic_centrifugal_desc': '<p><strong>离心铸造</strong>或<strong>旋转铸造</strong>是一种通常用于铸造薄壁圆柱体的铸造技术。它通常用于铸造金属、玻璃和混凝土等材料。通过控制冶金和晶体结构可以获得高质量。与大多数其他铸造技术不同，离心铸造主要用于制造标准尺寸的旋转对称原材料以供进一步加工，而不是针对特定用途定制的成型零件。</p><p>该工艺制造的典型零件包括管道、飞轮、气缸套和其他轴对称零件。它特别适用于铸造活塞发动机的气缸套和套筒阀，这些零件无法通过其他方式可靠制造。</p>',
            'technic_investment_title': '熔模铸造',
            'technic_lostfoam_title': '消失模铸造',
            'technic_die_title': '压力铸造',
            'technic_permanent_title': '金属型铸造',
            'technic_sand_title': '砂型铸造',
            'technic_advantages': '优点',
            'technic_disadvantages': '缺点',
            'technic_centrifugal_advantages': '<p>圆柱体和具有旋转对称性的形状最常采用这种技术铸造。长铸件通常以长轴平行于地面而不是竖直放置的方式生产，以便均匀分布重力的影响。</p><p>薄壁圆柱体难以用其他方法铸造。离心铸造特别适合，因为它们相对于离心力方向的行为类似于浅平面铸件。</p><p>离心铸造还用于制造盘形和圆柱形物体，如铁路车厢轮子或机器配件，其中晶粒、流动性和平衡性对成品的耐用性和实用性很重要。</p><p>非圆形形状也可以铸造，只要该形状的半径相对恒定。</p>',
            'technic_centrifugal_disadvantages': '<p>铸件的表面通常粗糙，没有精确的公差和精细的质量。该技术不适用于重金属或合金。</p>'
        }
    },

    // Initialize i18n
    init: function() {
        this.updatePageLanguage();
        this.bindLanguageSwitchers();
    },

    // Get translation
    t: function(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLang];
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return key; // Return key if translation not found
            }
        }
        return value || key;
    },

    // Switch language
    switchLanguage: function(lang) {
        if (lang !== 'en' && lang !== 'cn') return;
        this.currentLang = lang;
        localStorage.setItem('siteLanguage', lang);
        this.updatePageLanguage();
        this.updateLanguageSwitcherUI();
        // Dispatch custom event for other scripts to listen
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: lang } }));
    },

    // Update all translatable elements on the page
    updatePageLanguage: function() {
        // Update elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            // Check if element has specific attribute to update
            const attr = element.getAttribute('data-i18n-attr');
            if (attr) {
                element.setAttribute(attr, translation);
            } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });

        // Update page title if applicable
        const titleElement = document.querySelector('title[data-i18n]');
        if (titleElement) {
            document.title = this.t(titleElement.getAttribute('data-i18n'));
        }

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang === 'cn' ? 'zh-CN' : 'en';
    },

    // Bind language switcher events
    bindLanguageSwitchers: function() {
        document.querySelectorAll('[data-lang-switch]').forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = element.getAttribute('data-lang-switch');
                this.switchLanguage(lang);
            });
        });
    },

    // Update language switcher UI
    updateLanguageSwitcherUI: function() {
        document.querySelectorAll('[data-lang-switch]').forEach(element => {
            const lang = element.getAttribute('data-lang-switch');
            if (lang === this.currentLang) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    },

    // Get current language
    getCurrentLang: function() {
        return this.currentLang;
    }
};

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    I18n.init();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = I18n;
}
