// Unified Product Data Source
// This file contains all product information used across product list, category, and detail pages

const ProductData = {
    // Category definitions
    categories: {
        'permanent-mold': {
            id: 'permanent-mold',
            title: 'Permanent Mold Castings',
            name: 'Permanent Mold Castings',
            description: 'High-quality permanent mold castings for various industrial applications'
        },
        'ludox': {
            id: 'ludox',
            title: 'Ludox Precision Mouldings',
            name: 'Ludox Precision Mouldings',
            description: 'Precision mouldings using Ludox technology for complex geometries'
        },
        'crystal-sand': {
            id: 'crystal-sand',
            title: 'Crystal Sand Castings',
            name: 'Crystal Sand Castings',
            description: 'Crystal sand castings with excellent surface finish and dimensional accuracy'
        },
        'lost-wax': {
            id: 'lost-wax',
            title: 'Lost Wax Mouldings',
            name: 'Lost Wax Mouldings',
            description: 'Investment casting using lost wax process for intricate designs'
        },
        'gravity': {
            id: 'gravity',
            title: 'Gravity Casting',
            name: 'Gravity Casting',
            description: 'Aluminum and alloy gravity castings for automotive and industrial use'
        },
        'resin-shell': {
            id: 'resin-shell',
            title: 'Resin Shell Moulding',
            name: 'Resin Shell Moulding',
            description: 'Resin shell moulding for high-precision casting requirements'
        }
    },

    // Product list with all attributes
    products: [
        {
            id: 'spring-bearing',
            name: 'Spring Bearings',
            nameCN: '弹簧支架',
            coverImage: 'img/product/1-spring-bearings/1.jpg',
            images: [
                'img/product/1-spring-bearings/1.jpg',
                'img/product/1-spring-bearings/2.jpg',
            ],
            description: 'Custom spring bearings for trains, manufactured using sand casting process. High strength, wear-resistant, and long service life. Widely used in railway vehicle suspension systems.',
            descriptionCN: '为火车定制的弹簧支架，采用砂铸工艺制造。具有高强度、耐磨损、使用寿命长等特点。广泛应用于铁路车辆悬挂系统。',
            categories: ['crystal-sand'],
            material: 'Carbon Steel',
            weight: '15-50kg',
            price:'￥20.00',
            application: 'Railway Vehicles'
        },
        {
            id: 'brake-block',
            name: 'Brake Block Holder',
            nameCN: '闸瓦托',
            coverImage: 'img/product/2-brake-block-holders/1.jpg',
            images: [
                'img/product/2-brake-block-holders/1.jpg',
                'img/product/2-brake-block-holders/2.jpg',
            ],
            description: 'Brake block holders manufactured using precision casting process. Excellent mechanical properties and corrosion resistance, suitable for various railway vehicle braking systems.',
            descriptionCN: '闸瓦托，采用精密铸造工艺。具有优异的机械性能和耐腐蚀性，适用于各种铁路车辆的制动系统。',
            categories: ['lost-wax'],
            material: 'Stainless Steel',
            weight: '5-20kg',
            price:'￥10.00',
            application: 'Railway Braking Systems'
        },
        {
            id: 'auto-part',
            name: 'Electrical Equipment Part',
            nameCN: '电气设备配件',
            coverImage: 'img/product/3/1.jpg',
            images: [
                'img/product/3/1.jpg',
                 
            ],
            description: 'Automotive parts manufactured using resin sand casting process. High precision and excellent surface quality, meeting strict automotive industry quality standards.',
            descriptionCN: '电气设备配件，采用树脂砂铸造工艺。精度高、表面质量好，满足汽车行业严格的质量标准。',
            categories: ['resin-shell'],
            material: 'Cast Iron',
            weight: '2-30kg',
            price:'￥10.00',
            application: 'Automotive Industry'
        },
        {
            id: 'engine-case',
            name: 'Engine Case',
            nameCN: '发动机机壳',
            coverImage: 'img/product/4/1.jpg',
            images: [
                'img/product/4/1.jpg',
                
            ],
            description: 'Engine cases manufactured using sand casting process. Complex structure with uniform wall thickness, good heat dissipation performance and mechanical strength.',
            descriptionCN: '发动机机壳，采用砂型铸造工艺。结构复杂、壁厚均匀，具有良好的散热性能和机械强度。',
            categories: ['resin-shell'],
            material: 'Aluminum Alloy',
            weight: '10-40kg',
            price:'￥10.00',
            application: 'Engine Manufacturing'
        },
        {
            id: 'manhole-cover',
            name: 'Automobile Part',
            nameCN: '汽车配件',
            coverImage: 'img/product/5/1.gif',
            images: [
                'img/product/5/1.gif',
                 
            ],
            description: 'Manhole covers manufactured using ductile iron casting. Strong load-bearing capacity, slip-resistant and wear-resistant, widely used in municipal engineering projects.',
            descriptionCN: '汽车配件，采用球墨铸铁铸造。承载能力强、防滑耐磨，广泛应用于市政工程。',
            categories: ['resin-shell'],
            material: 'Ductile Iron',
            weight: '20-100kg',
            price:'￥10.00',
            application: 'Municipal Engineering'
        },
        {
            id: 'electrical-part',
            name: 'Triangle Manhole Cover',
            nameCN: '井盖',
            coverImage: 'img/product/6/1.jpg',
            images: [
                'img/product/6/1.jpg',
                 
            ],
            description: 'Electrical equipment accessories manufactured using precision casting process. Good insulation performance and high dimensional accuracy, suitable for various electrical equipment.',
            descriptionCN: '井盖，采用精密铸造工艺。绝缘性能好、尺寸精度高，适用于各种电气设备。',
            categories: ['resin-shell'],
            material: 'Aluminum Alloy',
            weight: '0.5-10kg',
            price:'￥10.00',
            application: 'Electrical Equipment'
        },
        {
            id: 'ball-valve',
            name: 'Ball Valve Moulding',
            nameCN: '树脂砂球阀铸件',
            coverImage: 'img/product/7/1.png',
            images: [
                'img/product/7/1.png',
                'img/product/7/2.png',
                 
            ],
            description: 'Ball valve castings manufactured using resin sand casting process. Excellent sealing performance and flow capacity, widely used in pipeline systems.',
            descriptionCN: '树脂砂球阀铸件，采用树脂砂铸造工艺。密封性能好、流通能力强，广泛应用于管道系统。',
            categories: ['resin-shell'],
            material: 'Stainless Steel',
            weight: '2-25kg',
            price:'￥10.00',
            application: 'Pipeline Systems'
        },
        {
            id: 'gravity-cast1',
            name: 'Aluminum Alloy Gravity Casting Part 7',
            nameCN: '铝合金重力铸造件7',
            coverImage: 'img/product/8/1.jpg',
            images: [
                'img/product/8/1.jpg',
                 
            ],
            description: 'Aluminum alloy gravity casting parts manufactured using gravity casting process. Uniform density and excellent mechanical properties, suitable for high-strength requirements.',
            descriptionCN: '铝合金重力铸造件，采用重力铸造工艺制造。密度均匀、机械性能优良，适用于高强度要求的场合。',
            categories: ['gravity'],
            material: 'Aluminum Alloy A356',
            weight: '1-15kg',
            price:'￥15.00',
            application: 'Automotive & Aerospace'
        },
        {
            id: 'gravity-cast2',
            name: 'Aluminum Alloy Gravity Casting Part 6',
            nameCN: '铝合金重力铸造件6',
            coverImage: 'img/product/9/1.png',
            images: [
                'img/product/9/1.png',
                
            ],
            description: 'Aluminum alloy gravity casting parts using advanced gravity casting technology. Smooth surface and precise dimensions, widely used in automotive and aviation fields.',
            descriptionCN: '铝合金重力铸造件，采用先进的重力铸造技术制造。表面光洁、尺寸精确，广泛应用于汽车、航空等领域。',
            categories: ['gravity'],
            material: 'Aluminum Alloy A380',
            weight: '2-20kg',
            price:'￥15.00',
            application: 'Automotive & Aviation'
        },
        {
            id: 'pipe-fitting',
            name: 'Aluminum Alloy Gravity Casting Part 5',
            nameCN: '铝合金重力铸造件5',
            coverImage: 'img/product/10/1.png',
            images: [
                'img/product/10/1.png',
                
            ],
            description: 'Aluminum alloy gravity casting parts manufactured using gravity casting process. Excellent dimensional accuracy and surface finish, suitable for complex structural components.',
            descriptionCN: '铝合金重力铸造件，采用重力铸造工艺制造。尺寸精度高、表面光洁度好，适用于复杂结构零部件。',
            categories: ['gravity'],
            material: 'Carbon Steel',
            weight: '50-200kg',
            price:'￥15.00',
            application: 'Industrial Pipeline'
        },
        {
            id: 'intercooler',
            name: 'Aluminum Alloy Gravity Casting Part 4',
            nameCN: '铝合金重力铸造件4',
            coverImage: 'img/product/11/1.png',
            images: [
                'img/product/11/1.png',
                
            ],
            description: 'Aluminum alloy gravity casting parts with superior thermal conductivity and lightweight design. Ideal for heat dissipation components in automotive and industrial applications.',
            descriptionCN: '铝合金重力铸造件，具有优异的导热性和轻量化设计。适用于汽车和工业应用中的散热部件。',
            categories: ['gravity'],
            material: 'Aluminum Alloy',
            weight: '5-25kg',
            price:'￥15.00',
            application: 'Automotive Turbo Systems'
        },
        {
            id: 'gearbox25',
            name: 'Aluminum Alloy Gravity Casting Part 3',
            nameCN: '铝合金重力铸造件3',
            coverImage: 'img/product/12/1.jpg',
            images: [
                'img/product/12/1.jpg',
                 
            ],
            description: 'Aluminum alloy gravity casting parts featuring high strength-to-weight ratio and corrosion resistance. Perfect for structural components requiring precision and durability.',
            descriptionCN: '铝合金重力铸造件，具有高强度重量比和耐腐蚀性。适用于需要精度和耐用性的结构零部件。',
            categories: ['gravity'],
            material: 'Cast Iron / Aluminum',
            weight: '10-60kg',
            price:'￥15.00',
            application: 'Transmission Systems'
        },
            {
            id: 'gearbox24',
            name: 'Aluminum Alloy Gravity Casting Part 2',
            nameCN: '铝合金重力铸造件2',
            coverImage: 'img/product/13/1.jpg',
            images: [
                'img/product/13/1.jpg',
                 
            ],
            description: 'Aluminum alloy gravity casting parts with excellent mechanical properties and surface quality. Widely used in automotive, aerospace and industrial machinery.',
            descriptionCN: '铝合金重力铸造件，具有优异的机械性能和表面质量。广泛应用于汽车、航空航天和工业机械领域。',
            categories: ['gravity'],
            material: 'Cast Iron / Aluminum',
            weight: '10-60kg',
            price:'￥15.00',
            application: 'Transmission Systems'
        },
            {
            id: 'gearbox23',
            name: 'Aluminum Alloy Gravity Casting Part 1',
            nameCN: '铝合金重力铸造件1',
            coverImage: 'img/product/14/1.jpg',
            images: [
                'img/product/14/1.jpg',
                 
            ],
            description: 'Aluminum alloy gravity casting parts manufactured with precision gravity casting technology. High dimensional accuracy and consistent quality for demanding applications.',
            descriptionCN: '铝合金重力铸造件，采用精密重力铸造技术制造。尺寸精度高、质量稳定，适用于高要求的应用场景。',
            categories: ['gravity'],
            material: 'Cast Iron / Aluminum',
            weight: '10-60kg',
            price:'￥15.00',
            application: 'Transmission Systems'
        },
            {
            id: 'gearbox22',
            name: 'Large Scale Pipe Fitting',
            nameCN: '沙铸大型管件',
            coverImage: 'img/product/15/1.jpg',
            images: [
                'img/product/15/1.jpg',
                 
            ],
            description: 'Large scale pipe fittings manufactured using sand casting process. Robust construction and excellent pressure resistance for industrial pipeline systems.',
            descriptionCN: '沙铸大型管件，采用砂型铸造工艺制造。结构坚固、耐压性能优异，适用于工业管道系统。',
            categories: ['crystal-sand'],
            material: 'Cast Iron / Aluminum',
            weight: '10-60kg',
            price:'￥30.00',
            application: 'Transmission Systems'
        },
            {
            id: 'gearbox21',
            name: 'Precision Moulding 5',
            nameCN: '精密铸造件5',
            coverImage: 'img/product/16/1.jpg',
            images: [
                'img/product/16/1.jpg',
                 
            ],
            description: 'Precision moulding parts manufactured using investment casting process. Complex geometries with tight tolerances and excellent surface finish.',
            descriptionCN: '精密铸造件，采用熔模铸造工艺制造。几何形状复杂、公差严格、表面光洁度优良。',
            categories: ['ludox'],
            material: 'Cast Iron / Aluminum',
            weight: '10-60kg',
            price:'￥5.00',
            application: 'Transmission Systems'
        },
            {
            id: 'gearbox20',
            name: 'Precision Moulding 7',
            nameCN: '精密铸造件7',
            coverImage: 'img/product/17/1.jpg',
            images: [
                'img/product/17/1.jpg',
                 
            ],
            description: 'Precision moulding parts with superior dimensional accuracy and repeatability. Ideal for components requiring intricate details and high-quality finish.',
            descriptionCN: '精密铸造件，具有卓越的尺寸精度和重复性。适用于需要精细细节和高品质表面处理的零部件。',
            categories: ['ludox'],
            material: 'Cast Iron / Aluminum',
            weight: '10-60kg',
            price:'￥5.00',
            application: 'Transmission Systems'
        },
            {
            id: 'gearbox19',
            name: 'Precision Moulding 6',
            nameCN: '精密铸造件6',
            coverImage: 'img/product/18/1.jpg',
            images: [
                'img/product/18/1.jpg',
                 
            ],
            description: 'Precision moulding parts manufactured with advanced casting technology. Excellent mechanical properties and corrosion resistance for critical applications.',
            descriptionCN: '精密铸造件，采用先进的铸造技术制造。具有优异的机械性能和耐腐蚀性，适用于关键应用。',
            categories: ['ludox'],
            material: 'Cast Iron / Aluminum',
            weight: '10-60kg',
            price:'￥5.00',
            application: 'Transmission Systems'
        },
            {
            id: 'gearbox18',
            name: 'Precision Moulding 4',
            nameCN: '精密铸造件4',
            coverImage: 'img/product/19/1.jpg',
            images: [
                'img/product/19/1.jpg',
                 
            ],
            description: 'Precision moulding parts with near-net-shape capability, reducing machining requirements. Cost-effective solution for complex metal components.',
            descriptionCN: '精密铸造件，具有近净成形能力，减少加工需求。复杂金属零部件的经济有效解决方案。',
            categories: ['ludox'],
            material: 'Cast Iron / Aluminum',
            weight: '10-60kg',
            price:'￥5.00',
            application: 'Transmission Systems'
        },
            {
            id: 'gearbox17',
            name: 'Precision Moulding 3',
            nameCN: '精密铸造件3',
            coverImage: 'img/product/20/1.jpg',
            images: [
                'img/product/20/1.jpg',
                 
            ],
            description: 'Precision moulding parts offering excellent surface finish and dimensional stability. Suitable for aerospace, medical and high-end industrial applications.',
            descriptionCN: '精密铸造件，提供优异的表面光洁度和尺寸稳定性。适用于航空航天、医疗和高端工业应用。',
            categories: ['ludox'],
            material: 'Cast Iron / Aluminum',
            weight: '10-60kg',
            price:'￥5.00',
            application: 'Transmission Systems'
        },
            {
            id: 'gearbox16',
            name: 'Precision Moulding 2',
            nameCN: '精密铸造件2',
            coverImage: 'img/product/21/1.jpg',
            images: [
                'img/product/21/1.jpg',
                 
            ],
            description: 'Precision moulding parts with high strength and durability. Engineered for demanding environments requiring reliable performance and long service life.',
            descriptionCN: '精密铸造件，具有高强度和耐用性。专为需要可靠性能和长使用寿命的苛刻环境而设计。',
            categories: ['ludox'],
            material: 'Cast Iron / Aluminum',
            weight: '10-60kg',
            price:'￥5.00',
            application: 'Transmission Systems'
        },
            {
            id: 'gearbox15',
            name: 'Precision Moulding 1',
            nameCN: '精密铸造件1',
            coverImage: 'img/product/22/1.jpg',
            images: [
                'img/product/22/1.jpg',
                 
            ],
            description: 'Precision moulding parts manufactured to exact specifications. Versatile solution for various industries including automotive, aerospace and machinery manufacturing.',
            descriptionCN: '精密铸造件，按精确规格制造。适用于汽车、航空航天和机械制造等各个行业的多功能解决方案。',
            categories: ['ludox'],
            material: 'Cast Iron / Aluminum',
            weight: '10-60kg',
            price:'￥5.00',
            application: 'Transmission Systems'
        },
            {
            id: 'gearbox14',
            name: 'intercooler',
            nameCN: '中冷器',
            coverImage: 'img/product/23/1.jpg',
            images: [
                'img/product/23/1.jpg',
                'img/product/23/2.jpg',
                 
            ],
            description: 'Intercooler castings for turbocharged engines. Efficient heat exchange performance and durable construction for automotive applications.',
            descriptionCN: '涡轮增压发动机中冷器铸件。高效换热性能和耐用结构，适用于汽车应用。',
            categories: ['crystal-sand'],
            material: 'Cast Iron / Aluminum',
            weight: '10-60kg',
            price:'￥50.00',
            application: 'Transmission Systems'
        },
          {
            id: 'gearbox13',
            name: 'Gearbox casting',
            nameCN: '变速箱铸件',
            coverImage: 'img/product/24/1.jpg',
            images: [
                'img/product/24/1.jpg',
                'img/product/24/2.jpg',

            ],
            description: 'Gearbox castings for automotive and industrial transmissions. High precision machining with excellent wear resistance and load-bearing capacity.',
            descriptionCN: '汽车和工业变速箱铸件。高精度加工，具有优异的耐磨性和承载能力。',
            categories: ['crystal-sand'],
            material: 'Cast Iron / Aluminum',
            weight: '10-60kg',
            price:'￥50.00',
            application: 'Transmission Systems'
        },
          {
            id: 'gearbox12',
            name: 'Boats and Port Equipments',
            nameCN: '船用设备配件',
            coverImage: 'img/product/23/1.jpg',
            images: [
                'img/product/25/1.jpg',
                'img/product/25/2.jpg',
                 
            ],
            description: 'Marine and port equipment castings manufactured using precision casting processes. Corrosion-resistant materials and robust construction for harsh marine environments.',
            descriptionCN: '船用设备配件，采用精密铸造工艺制造。耐腐蚀材料和坚固结构，适用于恶劣的海洋环境。',
            categories: ['lost-wax'],
            material: 'Cast Iron / Aluminum',
            weight: '10-60kg',
            price:'￥5.00',
            application: 'Transmission Systems'
        },
          {
            id: 'gearbox11',
            name: 'Valves and Pumps',
            nameCN: '阀门/泵配件',
            coverImage: 'img/product/26/1.jpg',
            images: [
                'img/product/26/1.jpg',
                'img/product/26/2.jpg',
                 
            ],
            description: 'Valve and pump castings for industrial fluid control systems. Excellent sealing performance and durability for various pressure and temperature applications.',
            descriptionCN: '阀门/泵配件，用于工业流体控制系统。优异的密封性能和耐用性，适用于各种压力和温度应用。',
            categories: ['lost-wax'],
            material: 'Cast Iron / Aluminum',
            weight: '10-60kg',
            price:'￥5.00',
            application: 'Transmission Systems'
        },
          {
            id: 'gearbox10',
            name: 'Parts of Engineering Vehicles & Machinery',
            nameCN: '工程车及机械配件',
            coverImage: 'img/product/27/1.jpg',
            images: [
                'img/product/27/1.jpg',
                'img/product/27/2.jpg',
                 
            ],
            description: 'Engineering vehicle and machinery parts manufactured using advanced casting techniques. High strength and wear resistance for heavy-duty construction applications.',
            descriptionCN: '工程车及机械配件，采用先进的铸造技术制造。高强度和耐磨性，适用于重型建筑应用。',
            categories: ['lost-wax'],
            material: 'Cast Iron / Aluminum',
            weight: '10-60kg',
            price:'￥5.00',
            application: 'Transmission Systems'
        },
          {
            id: 'gearbox9',
            name: 'Agricultural Machinery Casting Parts',
            nameCN: '农机配件',
            coverImage: 'img/product/28/1.jpg',
            images: [
                'img/product/28/1.jpg',
                'img/product/28/2.jpg',
                 
            ],
            description: 'Agricultural machinery casting parts designed for farming equipment. Durable construction and reliable performance in demanding agricultural environments.',
            descriptionCN: '农机配件，专为农业设备设计。结构耐用，在苛刻的农业环境中性能可靠。',
            categories: ['lost-wax'],
            material: 'Cast Iron / Aluminum',
            weight: '10-60kg',
            price:'￥5.00',
            application: 'Transmission Systems'
        },
          {
            id: 'gearbox8',
            name: 'Casting Wagon Parts',
            nameCN: '货运火车配件',
            coverImage: 'img/product/29/1.jpg',
            images: [
                'img/product/29/1.jpg',
                'img/product/29/2.jpg',
                 
            ],
            description: 'Railway wagon casting parts manufactured for freight transportation. Heavy-duty construction with excellent load-bearing capacity and long service life.',
            descriptionCN: '货运火车配件，用于货物运输。重型结构，具有优异的承载能力和长使用寿命。',
            categories: ['lost-wax'],
            material: 'Cast Iron / Aluminum',
            weight: '10-60kg',
            price:'￥5.00',
            application: 'Transmission Systems'
        },
          {
            id: 'gearbox7',
            name: 'Precision Moulding 8',
            nameCN: '精密铸造件8',
            coverImage: 'img/product/30/1.jpg',
            images: [
                'img/product/30/1.jpg',
                
                 
            ],
            description: 'Precision moulding parts with exceptional detail reproduction and surface quality. Advanced investment casting technology for complex geometries.',
            descriptionCN: '精密铸造件，具有卓越的细节再现和表面质量。采用先进的熔模铸造技术制造复杂几何形状。',
            categories: ['ludox'],
            material: 'Cast Iron / Aluminum',
            weight: '10-60kg',
            price:'￥5.00',
            application: 'Transmission Systems'
        },
          {
            id: 'gearbox6',
            name: 'Precision Moulding 9',
            nameCN: '精密铸造件9',
            coverImage: 'img/product/31/1.jpg',
            images: [
                'img/product/31/1.jpg',
                 
                 
            ],
            description: 'Precision moulding parts manufactured with state-of-the-art casting technology. Superior mechanical properties and tight dimensional tolerances.',
            descriptionCN: '精密铸造件，采用最先进的铸造技术制造。优越的机械性能和严格的尺寸公差。',
            categories: ['ludox'],
            material: 'Cast Iron / Aluminum',
            weight: '10-60kg',
            price:'￥5.00',
            application: 'Transmission Systems'
        },
          {
            id: 'gearbox5',
            name: 'Bogie Crossmember',
            nameCN: '转向架横梁',
            coverImage: 'img/product/32/1.jpg',
            images: [
                'img/product/32/1.jpg',
                 
                 
            ],
            description: 'Railway bogie crossmember castings designed for passenger and freight trains. High strength and fatigue resistance for safe railway operations.',
            descriptionCN: '铁路转向架横梁铸件，用于客运和货运列车。高强度和抗疲劳性，确保铁路运营安全。',
            categories: ['permanent-mold'],
            material: 'Cast Iron / Aluminum',
            weight: '10-60kg',
            price:'￥5.00',
            application: 'Transmission Systems'
        },
          {
            id: 'gearbox4',
            name: 'Aluminum Valve Casting',
            nameCN: '铝合金阀盖压铸件',
            coverImage: 'img/product/33/1.jpg',
            images: [
                'img/product/33/1.jpg',


            ],
            description: 'Aluminum valve castings for fluid control applications. Lightweight design with excellent corrosion resistance and reliable sealing performance.',
            descriptionCN: '铝合金阀盖压铸件，用于流体控制应用。轻量化设计，具有优异的耐腐蚀性和可靠的密封性能。',
            categories: ['permanent-mold'],
            material: 'Cast Iron / Aluminum',
            weight: '10-60kg',
            price:'￥5.00',

            application: 'Transmission Systems'
        },
          {
            id: 'gearbox3',
            name: 'Precision Moulding 10',
            nameCN: '精密铸造件10',
            coverImage: 'img/product/34/1.jpg',
            images: [
                'img/product/34/1.jpg',

            ],
            description: 'Precision moulding parts with consistent quality and excellent surface finish. Ideal for applications requiring high aesthetic and functional standards.',
            descriptionCN: '精密铸造件，质量稳定，表面光洁度优良。适用于需要高美学和功能标准的应用。',
            categories: ['ludox'],
            material: 'Cast Iron / Aluminum',
            weight: '10-60kg',
            price:'￥5.00',
            application: 'Transmission Systems'
        },
          {
            id: 'gearbox2',
            name: 'Precision Die Casting Motor Part',
            nameCN: '精密压铸件',
            coverImage: 'img/product/35/1.jpg',
            images: [
                'img/product/35/1.jpg',

            ],
            description: 'Precision die casting motor parts for electric motors and generators. High conductivity materials with precise dimensions for optimal performance.',
            descriptionCN: '精密压铸件，用于电动机和发电机。高导电材料，尺寸精确，确保最佳性能。',
            categories: ['permanent-mold'],
            material: 'Cast Iron / Aluminum',
            weight: '10-60kg',
            price:'￥5.00',

            application: 'Transmission Systems'
        },
          {
            id: 'gearbox1',
            name: 'Precision Moulding 11',
            nameCN: '精密铸造件11',
            coverImage: 'img/product/36/1.jpg',
            images: [
                'img/product/36/1.jpg',

            ],
            description: 'Precision moulding parts with high dimensional accuracy and excellent mechanical properties. Advanced casting technology for demanding industrial applications.',
            descriptionCN: '精密铸造件，具有高尺寸精度和优异的机械性能。采用先进的铸造技术，适用于要求苛刻的工业应用。',
            categories: ['ludox'],
            material: 'Cast Iron / Aluminum',
            weight: '10-60kg',
            price:'￥5.00',
            application: 'Transmission Systems'
        },
    ],

    // Utility functions
    utils: {
        // Get product by ID
        getProductById: function(id) {
            return ProductData.products.find(product => product.id === id);
        },

        // Get product name based on current language
        getProductName: function(product, lang) {
            if (!product) return '';
            lang = lang || (typeof I18n !== 'undefined' ? I18n.getCurrentLang() : 'en');
            return lang === 'cn' && product.nameCN ? product.nameCN : product.name;
        },

        // Get product description based on current language
        getProductDescription: function(product, lang) {
            if (!product) return '';
            lang = lang || (typeof I18n !== 'undefined' ? I18n.getCurrentLang() : 'en');
            return lang === 'cn' && product.descriptionCN ? product.descriptionCN : product.description;
        },

        // Get category name based on current language
        getCategoryName: function(category, lang) {
            if (!category) return '';
            lang = lang || (typeof I18n !== 'undefined' ? I18n.getCurrentLang() : 'en');
            if (lang === 'cn') {
                const cnNames = {
                    'permanent-mold': '金属型铸造',
                    'ludox': '硅溶胶精密铸造',
                    'crystal-sand': '砂型铸造',
                    'lost-wax': '失蜡铸造',
                    'gravity': '重力铸造',
                    'resin-shell': '树脂砂铸造'
                };
                return cnNames[category.id] || category.name;
            }
            return category.name;
        },

        // Get products by category
        getProductsByCategory: function(categoryId) {
            return ProductData.products.filter(product => 
                product.categories.includes(categoryId)
            );
        },

        // Get category by ID
        getCategoryById: function(categoryId) {
            return ProductData.categories[categoryId];
        },

        // Get all categories
        getAllCategories: function() {
            return Object.values(ProductData.categories);
        },

        // Get all products
        getAllProducts: function() {
            return ProductData.products;
        },

        // Get URL parameter
        getUrlParam: function(name) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        }
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ProductData;
}
