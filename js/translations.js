// Translations
const translations = {
	en: {
		// Navigation
		"brand": "CIMC Thailand",
		"nav-home": "Home",
		"nav-about": "About Us",
		"nav-products": "Products",
		"nav-news": "News & Events",
		"nav-customers": "Stakeholder Network",
		"nav-contact": "Contact Us",

		// Breadcrumbs
		"breadcrumb-home": "Home",
		"breadcrumb-products": "Products",

		// Product Details
		"overview-title": "Product Overview",
		"specs-title": "Technical Specifications",
		"features-title": "Key Features",
		"related-title": "Related Products",
		"btn-brochure": "Request Brochure",
		"btn-quote": "Request Quote",

		// Brochure Modal
		"brochure-modal-title": "Request Product Brochure",
		"brochure-product": "Product",
		"brochure-name": "Full Name",
		"brochure-email": "Email Address",
		"brochure-company": "Company",
		"brochure-phone": "Phone Number",
		"brochure-subscribe": "Subscribe to our newsletter for updates",
		"brochure-cancel": "Cancel",
		"brochure-download": "Download Brochure",
		"brochure-success": "Thank you! Your brochure download will begin shortly.",
		"brochure-error": "Please fill in all required fields.",
		"brochure-loading": "Processing your request..."
	},
	th: {
		// Navigation
		"brand": "ซีไอเอ็มซี ประเทศไทย",
		"nav-home": "หน้าแรก",
		"nav-about": "เกี่ยวกับเรา",
		"nav-products": "ผลิตภัณฑ์",
		"nav-news": "ข่าวสารและกิจกรรม",
		"nav-customers": "ผู้มีส่วนได้ส่วนเสีย",
		"nav-contact": "ติดต่อเรา",

		// Breadcrumbs
		"breadcrumb-home": "หน้าแรก",
		"breadcrumb-products": "ผลิตภัณฑ์",

		// Product Details
		"overview-title": "ภาพรวมสินค้า",
		"specs-title": "ข้อมูลจำเพาะทางเทคนิค",
		"features-title": "คุณสมบัติหลัก",
		"related-title": "สินค้าที่เกี่ยวข้อง",
		"btn-brochure": "ขอโบรชัวร์",
		"btn-quote": "ขอใบเสนอราคา",

		// Brochure Modal
		"brochure-modal-title": "ขอโบรชัวร์สินค้า",
		"brochure-product": "สินค้า",
		"brochure-name": "ชื่อ-นามสกุล",
		"brochure-email": "อีเมล",
		"brochure-company": "บริษัท",
		"brochure-phone": "เบอร์โทรศัพท์",
		"brochure-subscribe": "สมัครรับจดหมายข่าวเพื่อติดตามอัปเดต",
		"brochure-cancel": "ยกเลิก",
		"brochure-download": "ดาวน์โหลดโบรชัวร์",
		"brochure-success": "ขอบคุณ! การดาวน์โหลดโบรชัวร์ของคุณจะเริ่มในไม่ช้า",
		"brochure-error": "กรุณากรอกข้อมูลในช่องที่จำเป็นทั้งหมด",
		"brochure-loading": "กำลังประมวลผลคำขอของคุณ..."
	}
};

// Direct footer update function as fallback
const footerTranslations = {
	en: {
		"footer-brand": "CIMC Vehicles TH",
		"footer-desc": "Leading container manufacturing and logistics solutions provider in Southeast Asia, committed to quality, innovation, and customer satisfaction.",
		"footer-quick-links": "Quick Links",
		"footer-home": "Home",
		"footer-about": "About Us",
		"footer-products": "Products",
		"footer-news": "News & Events",
		"footer-customers": "Stakeholder Network",
		"footer-contact": "Contact Us",
		"footer-contact-title": "Contact Information",
		"footer-location": "7/258 Mu 6, Amata City Industrial Estate, Pluak Daeng, Rayong, Thailand 21140",
		"footer-weekdays": "Monday - Friday: 8:00 AM - 5:00 PM",
		"footer-saturday": "Saturday: 8:00 AM - 12:00 PM",
		"footer-copyright": "CIMC Vehicles TH",
		"footer-rights": "All Rights Reserved.",
		"footer-design": "Designed with",
		"footer-clients": "for our clients"
	},
	th: {
		"footer-brand": "ซีไอเอ็มซี ประเทศไทย",
		"footer-desc": "ผู้ผลิตตู้คอนเทนเนอร์และโซลูชันลอจิสติกส์ชั้นนำในเอเชียตะวันออกเฉียงใต้ มุ่งมั่นในคุณภาพ นวัตกรรม และความพึงพอใจของลูกค้า",
		"footer-quick-links": "ลิงก์ด่วน",
		"footer-home": "หน้าแรก",
		"footer-about": "เกี่ยวกับเรา",
		"footer-products": "ผลิตภัณฑ์",
		"footer-news": "ข่าวสารและกิจกรรม",
		"footer-customers": "ลูกค้าของเรา",
		"footer-contact": "ติดต่อเรา",
		"footer-contact-title": "ข้อมูลติดต่อ",
		"footer-location": "7/258 หมู่ 6 นิคมอุตสาหกรรมอมตะซิตี้ อำเภอปลวกแดง จังหวัดระยอง 21140",
		"footer-weekdays": "วันจันทร์ - วันศุกร์: 8:00 - 17:00 น.",
		"footer-saturday": "วันเสาร์: 8:00 - 12:00 น.",
		"footer-copyright": "ซีไอเอ็มซี ประเทศไทย",
		"footer-rights": "สงวนลิขสิทธิ์.",
		"footer-design": "ออกแบบด้วย",
		"footer-clients": "สำหรับลูกค้าของเรา"
	}
};

// Product database with translations
const products = {
	1: {
		id: 1,
		brochureUrl: {
			en: "./img/brochure.pdf",
			th: "./img/brochure.pdf"
		},
		translations: {
			en: {
				name: "Container Chassis",
				series: "Chassis Series",
				description: "FEA-optimized T700 frame (5.2t tare) with auto twist locks - maximum payload efficiency for port logistics.",
				detailedDescription: "<p>Engineered for ISO shipping containers (20/40/45), optimized for port, yard, and line-haul operations. Features FEA-optimized structure balancing strength and weight reduction, with automated twist locks for rapid handling.</p>",
				specifications: {
					"Payload Capacity": "30-45 tonnes",
					"Container Compatibility": "20'/40'/45' ISO Containers",
					"Frame Material": "T700 High-Tensile Steel",
					"Coating": "Sandblasting + Epoxy Zinc Primer + PU Topcoat",
					"Twist Locks": "Adjustable",
					"Axle Configuration": "3-Axle",
					"Suspension": "Mechanical Spring / Air Ride",
					"Overall Length": "12.5-14.6m",
					"Tare Weight": "5.2-6.8 tonnes"
				},
				features: [
					"Adjustable gooseneck for container height variance",
					"250μm anti-corrosion duplex coating",
					"Integrated ABS/EBS braking",
					"Optional TPMS (Tyre Pressure Monitoring)",
					"Reinforced torsion-resistant beams (Yield ≥700MPa)",
					"AAR M-943 certified"
				]
			},
			th: {
				name: "แชสซีตู้คอนเทนเนอร์",
				series: "ซีรีส์แชสซี",
				description: "โครง T700 ที่ได้รับการปรับให้เหมาะสมด้วย FEA (น้ำหนักเปล่า 5.2 ตัน) พร้อมล็อคบิดอัตโนมัติ - ประสิทธิภาพการบรรทุกสูงสุดสำหรับลอจิสติกส์ท่าเรือ",
				detailedDescription: "<p>ออกแบบมาสำหรับตู้คอนเทนเนอร์ ISO (20/40/45) ปรับให้เหมาะสมสำหรับการดำเนินงานในท่าเรือ ลานตู้ และการขนส่งทางไกล มีโครงสร้างที่ปรับให้เหมาะสมด้วย FEA เพื่อสร้างสมดุลระหว่างความแข็งแรงและการลดน้ำหนัก พร้อมล็อคบิดอัตโนมัติสำหรับการจัดการอย่างรวดเร็ว</p>",
				specifications: {
					"ความจุในการบรรทุก": "30-45 ตัน",
					"ความเข้ากันได้กับตู้คอนเทนเนอร์": "ตู้คอนเทนเนอร์ ISO ขนาด 20'/40'/45'",
					"วัสดุโครงสร้าง": "เหล็กความแข็งแรงสูง T700",
					"การเคลือบ": "การพ่นทราย + สีรองพื้นสังกะสีอีพอกซี + สีทับหน้า PU",
					"ล็อคบิด": "ปรับได้",
					"การกำหนดค่าชุดเพลา": "3 เพลา",
					"ระบบกันสะเทือน": "สปริงกล / แอร์ไรด์",
					"ความยาวรวม": "12.5-14.6 เมตร",
					"น้ำหนักเปล่า": "5.2-6.8 ตัน"
				},
				features: [
					"คอห่านปรับได้สำหรับความสูงของตู้คอนเทนเนอร์ที่แตกต่างกัน",
					"การเคลือบสองชั้นป้องกันการกัดกร่อน 250μm",
					"ระบบเบรก ABS/EBS แบบบูรณาการ",
					"ตัวเลือก TPMS (ระบบตรวจสอบแรงดันยาง)",
					"คานต้านแรงบิดเสริม (จุดคราก ≥700MPa)",
					"ได้รับการรับรอง AAR M-943"
				]
			}
		},
		images: [
			"./product/container.png",
			"./product/container.jpg",
			"./product/container1.jpg"
		],
		related: [2, 3, 6]
	},
	2: {
		id: 2,
		brochureUrl: {
			en: "./img/brochure.pdf",
			th: "./img/brochure.pdf"
		},
		translations: {
			en: {
				name: "Flatbed Semi-Trailer",
				series: "Chassis Series",
				description: "Ultra-versatile platform (1,000mm low deck) with modular extendable axles and diamond-tread deck - optimal for oversized machinery transport.",
				detailedDescription: "<p>Versatile platform for oversized cargo (steel, machinery) with 1,000mm low deck height. Equipped with multiple lashing points and foldable sides.</p>",
				specifications: {
					"Payload Capacity": "40-60 tonnes",
					"Frame Material": "Q345B Steel",
					"Coating": "80μm Hot-Dip Galvanizing",
					"Axle Configuration": "2/3-Axle",
					"Suspension": "Leaf Spring + Dampers",
					"Overall Length": "13-16m",
					"Tare Weight": "6.5-8.2 tonnes"
				},
				features: [
					"Modular extendable design (up to 5 axles)",
					"5mm diamond-tread anti-skid deck",
					"Hydraulic folding side rails",
					"4x D-rings/meter (5-tonne capacity)",
					"Optional hydraulic ramps",
					"EN 12642 XL compliant"
				]
			},
			th: {
				name: "รถพ่วงแบบแบน",
				series: "ซีรีส์แชสซี",
				description: "ดาดฟ้าอเนกประสงค์สุดพิเศษ (ดาดฟ้าต่ำ 1,000 มม.) พร้อมเพลาขยายแบบแยกส่วนและดาดฟ้าแบบร่องเพชร - เหมาะสมที่สุดสำหรับการขนส่งเครื่องจักรขนาดใหญ่",
				detailedDescription: "<p>ดาดฟ้าอเนกประสงค์สำหรับสินค้าขนาดใหญ่ (เหล็ก, เครื่องจักร) ที่มีความสูงดาดฟ้าต่ำ 1,000 มม. พร้อมจุดผูกมัดหลายจุดและด้านข้างพับได้</p>",
				specifications: {
					"ความจุในการบรรทุก": "40-60 ตัน",
					"วัสดุโครงสร้าง": "เหล็ก Q345B",
					"การเคลือบ": "ชุบสังกะสีแบบจุ่มร้อน 80μm",
					"การกำหนดค่าชุดเพลา": "2/3 เพลา",
					"ระบบกันสะเทือน": "สปริงใบ + แอมป์เนอร์",
					"ความยาวรวม": "13-16 เมตร",
					"น้ำหนักเปล่า": "6.5-8.2 ตัน"
				},
				features: [
					"การออกแบบแบบแยกส่วนขยายได้ (สูงสุด 5 เพลา)",
					"ดาดฟ้ากันลื่นแบบร่องเพชร 5 มม.",
					"ราวข้างพับไฮดรอลิก",
					"จุดผูกมัด 4 จุด/เมตร (ความจุ 5 ตัน)",
					"ทางลาดไฮดรอลิกเสริม (ตัวเลือก)",
					"เป็นไปตามมาตรฐาน EN 12642 XL"
				]
			}
		},
		images: [
			"./product/flatbed1.jpg",
			"./product/flatbed.jpg",
			"./product/flatbed2.jpg"
		],
		related: [1, 4, 5]
	},
	3: {
		id: 3,
		brochureUrl: {
			en: "./img/brochure.pdf",
			th: "./img/brochure.pdf"
		},
		translations: {
			en: {
				name: "Tipping Container Chassis",
				series: "Chassis Series",
				description: "Heavy-duty chassis with hydraulic tipping (45° max) for bulk materials (ores, waste). Reinforced legs and dual cylinders ensure stability.",
				detailedDescription: "<p>Heavy-duty chassis with hydraulic tipping (45° max) for bulk materials (ores, waste). Reinforced legs and dual cylinders ensure stability during operation.</p>",
				specifications: {
					"Payload Capacity": "28-35 tonnes",
					"Container Compatibility": "20'/40' Open-top Containers",
					"Frame Material": "Q460C Alloy Steel",
					"Coating": "Zinc-Rich Primer + PU",
					"Twist Locks": "4x Reinforced Automatic",
					"Axle Configuration": "3-Axle",
					"Suspension": "Heavy-Duty Leaf Spring",
					"Overall Length": "12.8m",
					"Tare Weight": "6.8-7.5 tonnes"
				},
				features: [
					"Dual 220bar hydraulic cylinders",
					"Mechanical safety lock",
					"Steel-braided explosion-proof hoses",
					"Lift-operation warning lights",
					"Reinforced outriggers",
					"Dust-proof valve system"
				]
			},
			th: {
				name: "แชสซีตู้คอนเทนเนอร์แบบเทข้าง",
				series: "ซีรีส์แชสซี",
				description: "แชสซีแบบหนักพร้อมระบบเทไฮดรอลิก (สูงสุด 45 องศา) สำหรับวัสดุจำนวนมาก (แร่, ของเสีย) ขายึดเสริมและกระบอกสูบคู่รับประกันความมั่นคง",
				detailedDescription: "<p>แชสซีแบบหนักพร้อมระบบเทไฮดรอลิก (สูงสุด 45 องศา) สำหรับวัสดุจำนวนมาก (แร่, ของเสีย) ขายึดเสริมและกระบอกสูบคู่รับประกันความมั่นคงระหว่างการทำงาน</p>",
				specifications: {
					"ความจุในการบรรทุก": "28-35 ตัน",
					"ความเข้ากันได้กับตู้คอนเทนเนอร์": "ตู้คอนเทนเนอร์แบบเปิดหลังขนาด 20'/40'",
					"วัสดุโครงสร้าง": "เหล็กอัลลอย Q460C",
					"การเคลือบ": "สีรองพื้นสังกะสี + PU",
					"ล็อคบิด": "4 จุด อัตโนมัติแบบเสริมแรง",
					"การกำหนดค่าชุดเพลา": "3 เพลา",
					"ระบบกันสะเทือน": "สปริงใบแบบหนัก",
					"ความยาวรวม": "12.8 เมตร",
					"น้ำหนักเปล่า": "6.8-7.5 ตัน"
				},
				features: [
					"กระบอกสูบไฮดรอลิกคู่ 220 บาร์",
					"ล็อคความปลอดภัยเชิงกล",
					"ท่อกันระเบิดถักเหล็ก",
					"ไฟเตือนขณะยกทำงาน",
					"ขายึดเสริมแรง",
					"ระบบวาล์วกันฝุ่น"
				]
			}
		},
		images: [
			"./product/tipping1.jpg",
			"./product/tipping2.jpg",
			"./product/tipping3.jpg"
		],
		related: [1, 4, 6]
	},
	4: {
		id: 4,
		brochureUrl: {
			en: "./img/brochure.pdf",
			th: "./img/brochure.pdf"
		},
		translations: {
			en: {
				name: "Low Bed Trailer",
				series: "Chassis Series",
				description: "Step-deck design (800mm ultra-low height) with hydraulic ramps and CTI system - engineered for super-heavy/tall construction equipment.",
				detailedDescription: "<p>Step-deck design for tall/heavy equipment (excavators, transformers) with ultra-low 800mm deck height and hydraulic loading ramps.</p>",
				specifications: {
					"Payload Capacity": "60-100 tonnes",
					"Frame Material": "Hardox 450 Steel",
					"Coating": "Shot Blasting + 2K Epoxy",
					"Axle Configuration": "3-7 Axles",
					"Suspension": "Hydraulic Height Adjustment",
					"Overall Length": "12-18m",
					"Tare Weight": "10-15 tonnes"
				},
				features: [
					"Hydraulic extendable ramps (25° incline)",
					"Removable gooseneck",
					"8x jacking points (20-tonne capacity)",
					"Central tyre inflation system",
					"Anti-slip checker plate deck",
					"10% gradeability when loaded"
				]
			},
			th: {
				name: "รถพ่วงแบบเตี้ย",
				series: "ซีรีส์แชสซี",
				description: "การออกแบบดาดฟ้าชั้นขั้นบันได (ความสูงต่ำพิเศษ 800 มม.) พร้อมทางลาดไฮดรอลิกและระบบ CTI - ออกแบบมาเพื่ออุปกรณ์ก่อสร้างขนาดใหญ่/สูง",
				detailedDescription: "<p>การออกแบบดาดฟ้าชั้นขั้นบันไดสำหรับอุปกรณ์สูง/หนัก (รถขุด, หม้อแปลง) ที่มีความสูงดาดฟ้าต่ำพิเศษ 800 มม. และทางลาดบรรทุกไฮดรอลิก</p>",
				specifications: {
					"ความจุในการบรรทุก": "60-100 ตัน",
					"วัสดุโครงสร้าง": "เหล็ก Hardox 450",
					"การเคลือบ": "การยิงทราย + อีพ็อกซี่ 2K",
					"การกำหนดค่าชุดเพลา": "3-7 เพลา",
					"ระบบกันสะเทือน": "การปรับความสูงไฮดรอลิก",
					"ความยาวรวม": "12-18 เมตร",
					"น้ำหนักเปล่า": "10-15 ตัน"
				},
				features: [
					"ทางลาดขยายไฮดรอลิก (ความลาดชัน 25 องศา)",
					"คอห่านถอดได้",
					"จุดยก 8 จุด (ความจุ 20 ตัน)",
					"ระบบเติมลมยางกลาง",
					"ดาดฟ้าแผ่นตาหมากรุกกันลื่น",
					"ความสามารถในการขึ้นทางลาด 10% เมื่อบรรทุก"
				]
			}
		},
		images: [
			"./product/lowbed.jpg",
			"./product/lowbed1.jpg",
			"./product/lowbed2.jpg"
		],
		related: [2, 3, 5]
	},
	5: {
		id: 5,
		brochureUrl: {
			en: "./img/brochure.pdf",
			th: "./img/brochure.pdf"
		},
		translations: {
			en: {
				name: "Drop Chassis for ISO Tank",
				series: "Chassis Series",
				description: "150mm lowered CG with chemical-resistant coating and ADR compliance - safest solution for hazardous liquid tank transport.",
				detailedDescription: "<p>Specialized frame with lowered center of gravity for ISO tank transport. Features reinforced tank mounts and corrosion-resistant finish.</p>",
				specifications: {
					"Payload Capacity": "32-40 tonnes",
					"Container Compatibility": "20'/30' ISO Tanks",
					"Frame Material": "Corten Steel",
					"Coating": "Zinc-Aluminum Spray + Epoxy",
					"Twist Locks": "4x Tank-Specific",
					"Axle Configuration": "3-Axle",
					"Suspension": "Air Ride",
					"Overall Length": "12.2m",
					"Tare Weight": "5.5-6.2 tonnes"
				},
				features: [
					"150mm lowered center gravity",
					"Vibration-dampening tank pads",
					"Electrostatic grounding system",
					"Rear impact guard (ASME B30.20)",
					"Chemical-resistant coating",
					"ADR 2019 compliant"
				]
			},
			th: {
				name: "แชสซีแบบลดระดับสำหรับถัง ISO",
				series: "ซีรีส์แชสซี",
				description: "จุดศูนย์ถ่วงลดลง 150 มม. พร้อมการเคลือบกันสารเคมีและการปฏิบัติตาม ADR - โซลูชันที่ปลอดภัยที่สุดสำหรับการขนส่งถังของเหลวอันตราย",
				detailedDescription: "<p>โครงแบบพิเศษที่มีจุดศูนย์ถ่วงลดลงสำหรับการขนส่งถัง ISO มีจุดยึดถังเสริมแรงและผิวเคลือบกันการกัดกร่อน</p>",
				specifications: {
					"ความจุในการบรรทุก": "32-40 ตัน",
					"ความเข้ากันได้กับตู้คอนเทนเนอร์": "ถัง ISO ขนาด 20'/30'",
					"วัสดุโครงสร้าง": "เหล็ก Corten",
					"การเคลือบ": "สเปรย์สังกะสี-อลูมิเนียม + อีพ็อกซี่",
					"ล็อคบิด": "4 จุด สำหรับถังเฉพาะ",
					"การกำหนดค่าชุดเพลา": "3 เพลา",
					"ระบบกันสะเทือน": "แอร์ไรด์",
					"ความยาวรวม": "12.2 เมตร",
					"น้ำหนักเปล่า": "5.5-6.2 ตัน"
				},
				features: [
					"จุดศูนย์ถ่วงลดลง 150 มม.",
					"แผ่นรองถังลดการสั่นสะเทือน",
					"ระบบสายดินไฟฟ้าสถิต",
					"กันชนกระแทกด้านหลัง (ASME B30.20)",
					"การเคลือบกันสารเคมี",
					"เป็นไปตามมาตรฐาน ADR 2019"
				]
			}
		},
		images: [
			"./product/isotankchassis.jpg",
			"./product/isotankchassis1.jpg",
			"./product/isotankchassis2.jpg"
		],
		related: [1, 4, 6]
	},
	6: {
		id: 6,
		brochureUrl: {
			en: "./img/brochure.pdf",
			th: "./img/brochure.pdf"
		},
		translations: {
			en: {
				name: "Light Weight Chassis Full Trailer",
				series: "Chassis Series",
				description: "Aircraft-grade aluminum (3.8t tare) with air suspension - 30% lighter for e-commerce/high-mileage container haulage.",
				detailedDescription: "<p>Aluminum-alloy full trailer for high-payload efficiency. Ideal for logistics and e-commerce with tare weight 30% lower than steel equivalents.</p>",
				specifications: {
					"Payload Capacity": "35-42 tonnes",
					"Container Compatibility": "20'/40'/45' Containers",
					"Frame Material": "6082-T6 Aluminum",
					"Coating": "Anodized + Powder Coating",
					"Twist Locks": "4x Automatic",
					"Axle Configuration": "2-Axle",
					"Suspension": "Air suspension",
					"Overall Length": "13.6m",
					"Tare Weight": "3.8-4.5 tonnes"
				},
				features: [
					"Aircraft-grade extruded aluminum",
					"98% corrosion resistance",
					"Telematics-ready CAN-BUS",
					"Wide-base single tires (445/50R22.5)",
					"5-year structural warranty",
					"EU Whole Vehicle Type Approval"
				]
			},
			th: {
				name: "รถพ่วงเต็มรูปแบบแชสซีน้ำหนักเบา",
				series: "ซีรีส์แชสซี",
				description: "อลูมิเนียมเกรดอากาศยาน (น้ำหนักเปล่า 3.8 ตัน) พร้อมระบบกันสะเทือนลม - เบาลง 30% สำหรับการขนส่งตู้คอนเทนเนอร์อีคอมเมิร์ซ/ระยะทางสูง",
				detailedDescription: "<p>รถพ่วงเต็มรูปแบบโลหะผสมอลูมิเนียมสำหรับประสิทธิภาพการบรรทุกสูง เหมาะสำหรับลอจิสติกส์และอีคอมเมิร์ซที่มีน้ำหนักเปล่าต่ำกว่าเหล็กเทียบเท่า 30%</p>",
				specifications: {
					"ความจุในการบรรทุก": "35-42 ตัน",
					"ความเข้ากันได้กับตู้คอนเทนเนอร์": "ตู้คอนเทนเนอร์ขนาด 20'/40'/45'",
					"วัสดุโครงสร้าง": "อลูมิเนียม 6082-T6",
					"การเคลือบ": "อะโนไดซ์ + ผงเคลือบ",
					"ล็อคบิด": "4 จุด อัตโนมัติ",
					"การกำหนดค่าชุดเพลา": "2 เพลา",
					"ระบบกันสะเทือน": "ระบบกันสะเทือนลม",
					"ความยาวรวม": "13.6 เมตร",
					"น้ำหนักเปล่า": "3.8-4.5 ตัน"
				},
				features: [
					"อลูมิเนียมรีดเกรดอากาศยาน",
					"ต้านทานการกัดกร่อน 98%",
					"CAN-BUS พร้อมสำหรับ Telematics",
					"ยางเดี่ยวฐานกว้าง (445/50R22.5)",
					"รับประกันโครงสร้าง 5 ปี",
					"การรับรองประเภทยานพาหนะทั้งหมดของสหภาพยุโรป"
				]
			}
		},
		images: [
			"./product/fulltrailer1.jpg",
			"./product/fulltrailer2.jpg",
			"./product/fulltrailer3.jpg"
		],
		related: [1, 3, 5]
	},
   7: {
		id: 7,
		brochureUrl: {
			en: "./img/brochure.pdf",
			th: "./img/brochure.pdf"
		},
		translations: {
			en: {
				name: "Dump (Middle Lifting)",
				series: "Dumper Trailer",
				description: "Center-balanced hydraulic lifting for stable 45' tipping of cohesive materials.",
				detailedDescription: "<p>Our Middle Lifting Dump Trailer features centrally positioned dual hydraulic cylinders that ensure even force distribution during unloading, preventing material shift and trailer instability. Designed for construction sites requiring precise material placement.</p><p>The reinforced frame and Hardox 450 wear plates withstand demanding operations while the lockable tarp system protects materials during transport. Ideal for wet aggregates and cohesive materials that require controlled discharge.</p>",
				specifications: {
					"Payload Capacity": "25-40 tonnes",
					"Container Compatibility": "N/A",
					"Frame Material": "Q345B Steel",
					"Coating": "200¦Ìm Epoxy-Polyurethane",
					"Twist Locks": "N/A",
					"Axle Configuration": "2-3 Axles",
					"Suspension": "Reinforced Leaf Spring",
					"Overall Length": "8-10m",
					"Tare Weight": "5.0-6.5 tonnes"
				},
				features: [
					"Dual 200bar center cylinders",
					"Anti-buckling crossmembers",
					"Lockable tarp system",
					"15% grade operation capability",
					"Safety tilt alarms",
					"Hardox 450 wear plates"
				]
			},
			th: {
				name: "รถดัมพ์ (ยกกลาง)",
				series: "รถพ่วงบรรทุก",
				description: "ระบบไฮดรอลิกยกกลางเพื่อการเทวัสดุที่เกาะกันแน่นในมุม 45 องศาอย่างมั่นคง",
				detailedDescription: "<p>รถพ่วงดัมพ์ยกกลางของเรามีกระบอกไฮดรอลิกคู่ที่อยู่ตรงกลางเพื่อกระจายแรงอย่างสม่ำเสมอระหว่างการขนถ่าย ป้องกันการเคลื่อนตัวของวัสดุและความไม่มั่นคงของรถพ่วง ออกแบบสำหรับสถานที่ก่อสร้างที่ต้องการการวางวัสดุที่แม่นยำ</p><p>โครงสร้างเสริมและแผ่นกันสึก Hardox 450 ทนทานต่อการทำงานที่ต้องการสูง ในขณะที่ระบบผ้าใบกันน้ำป้องกันวัสดุระหว่างการขนส่ง เหมาะสำหรับวัสดุเปียกและวัสดุที่เกาะกันแน่นที่ต้องการการปล่อยที่ควบคุมได้</p>",
				specifications: {
					"ความจุในการบรรทุก": "25-40 ตัน",
					"ความเข้ากันได้กับตู้คอนเทนเนอร์": "ไม",
					"วัสดุโครงสร้าง": "เหล็ก Q345B",
					"การเคลือบ": "อีพอกซี-โพลียูรีเทน 200¦Ìm",
					"ล็อคบิด": "ไม",
					"การกำหนดค่าชุดเพลา": "2-3 เพลา",
					"ระบบกันสะเทือน": "สปริงใบเสริมกำลัง",
					"ความยาวรวม": "8-10 เมตร",
					"น้ำหนักเปล่า": "5.0-6.5 ตัน"
				},
				features: [
					"กระบอกไฮดรอลิกคู่ 200 บาร์ที่อยู่กลาง",
					"คานขวางกันการโก่งตัว",
					"ระบบผ้าใบกันน้ำที่ล็อคได้",
					"สามารถทำงานบนความลาดชัน 15%",
					"สัญญาณเตือนการเอียง",
					"แผ่นกันสึก Hardox 450"
				]
			}
		},
		images: [
			"./product/dump_trailer.jpg",
			"./product/dump_trailer1.jpg",
			"./product/dump_trailer2.jpg"
		],
		related: [8, 9]
	},

	8: {
		id: 8,
		brochureUrl: {
			en: "./img/brochure.pdf",
			th: "./img/brochure.pdf"
		},
		translations: {
			en: {
				name: "Dump Semi-trailer",
				series: "Dumper Trailer",
				description: "High-volume rear discharge (50' angle) for rapid unloading of bulk minerals.",
				detailedDescription: "<p>Heavy-duty rear-tipping semi-trailer with reinforced hopper-style body, optimized for mining and aggregate transport. Features multi-stage telescopic cylinders for full bed elevation in under 90 seconds.</p><p>The removable side extensions increase volume capacity by 30%, while the overload warning sensors prevent damage during operation. Steel-braced tailgate ensures secure containment during transport and controlled discharge.</p>",
				specifications: {
					"Payload Capacity": "40-70 tonnes",
					"Container Compatibility": "N/A",
					"Frame Material": "Q460C Steel",
					"Coating": "100¦Ìm Hot-Dip Galvanized",
					"Twist Locks": "N/A",
					"Axle Configuration": "3-5 Axles",
					"Suspension": "Air Ride",
					"Overall Length": "10-13m",
					"Tare Weight": "8.0-12 tonnes"
				},
				features: [
					"50' max tipping angle",
					"Removable side extensions (+30% volume)",
					"Auto-lubrication system",
					"Overload warning sensors",
					"Steel-braced tailgate",
					"SAE J262 safety compliant"
				]
			},
			th: {
				name: "รถพ่วงดัมพ์",
				series: "รถพ่วงบรรทุก",
				description: "ระบบปล่อยด้านหลังปริมาณสูง (มุม 50 องศา) สำหรับการขนถ่ายแร่จำนวนมากอย่างรวดเร็ว",
				detailedDescription: "<p>รถพ่วงแบบทิ้งด้านหลังโครงสร้างแข็งแรงพร้อมตัวถังแบบฮอปเปอร์เสริมกำลัง ออกแบบมาสำหรับการขนส่งเหมืองแร่และวัสดุรวม มีกระบอกสูบแบบหลายขั้นตอนที่ยกเตียงเต็มในเวลาไม่ถึง 90 วินาที</p><p>ส่วนขยายด้านข้างที่ถอดออกได้เพิ่มความจุปริมาตรได้ 30% ในขณะที่เซ็นเซอร์เตือนน้ำหนักเกินป้องกันความเสียหายระหว่างการทำงาน ประตูด้านหลังเสริมเหล็กช่วยให้การกักเก็บระหว่างการขนส่งและการปล่อยวัสดุเป็นไปอย่างปลอดภัย</p>",
				specifications: {
					"ความจุในการบรรทุก": "40-70 ตัน",
					"ความเข้ากันได้กับตู้คอนเทนเนอร์": "ไม",
					"วัสดุโครงสร้าง": "เหล็ก Q460C",
					"การเคลือบ": "ชุบสังกะสีแบบจุ่มร้อน 100¦Ìm",
					"ล็อคบิด": "ไม",
					"การกำหนดค่าชุดเพลา": "3-5 เพลา",
					"ระบบกันสะเทือน": "ระบบลม",
					"ความยาวรวม": "10-13 เมตร",
					"น้ำหนักเปล่า": "8.0-12 ตัน"
				},
				features: [
					"มุมเอียงสูงสุด 50 องศา",
					"ส่วนขยายด้านข้างที่ถอดออกได้ (+30% ปริมาตร)",
					"ระบบหล่อลื่นอัตโนมัติ",
					"เซ็นเซอร์เตือนน้ำหนักเกิน",
					"ประตูด้านหลังเสริมเหล็ก",
					"เป็นไปตามมาตรฐานความปลอดภัย SAE J262"
				]
			}
		},
		images: [
			"./product/dump_semitrailer1.jpg",
			"./product/dump_semitrailer.jpg",
			"./product/dump_trailer4.jpg"
		],
		related: [8, 9]
	},

	9: {
		id: 9,
		brochureUrl: {
			en: "./img/brochure.pdf",
			th: "./img/brochure.pdf"
		},
		translations: {
			en: {
				name: "Dump Full Trailer",
				series: "Dumper Trailer",
				description: "Independent maneuverability with gooseneck coupling for confined job sites.",
				detailedDescription: "<p>Self-contained 4-axle unit with hydraulic front tipping, enabling operation without prime mover attachment during unloading. The 360' swivel fifth wheel allows exceptional maneuverability in tight spaces like quarries and construction sites.</p><p>Retractable stabilizer legs provide stability during dumping operations, while the auto-engage parking brake ensures safety on inclines. Ideal for quarry-to-crusher material transfer operations.</p>",
				specifications: {
					"Payload Capacity": "30-50 tonnes",
					"Container Compatibility": "N/A",
					"Frame Material": "Q345B Steel",
					"Coating": "Zinc-Aluminum Spray",
					"Twist Locks": "N/A",
					"Axle Configuration": "4 Axles",
					"Suspension": "Mechanical Spring",
					"Overall Length": "9-12m",
					"Tare Weight": "7.5-10 tonnes"
				},
				features: [
					"360' swivel fifth wheel",
					"Front-mounted 220bar cylinder",
					"Retractable stabilizer legs",
					"Dual air reservoirs",
					"LED work lights",
					"Auto-engage parking brake"
				]
			},
			th: {
				name: "รถพ่วงเต็มรูปแบบ",
				series: "รถพ่วงบรรทุก",
				description: "การเคลื่อนที่อย่างอิสระด้วยระบบคัปปลิ้งคอห่านสำหรับสถานที่ทำงานที่จำกัด",
				detailedDescription: "<p>รถพ่วงแบบ 4 เพลาที่ทำงานได้ด้วยตัวเองพร้อมระบบทิ้งด้านหน้าไฮดรอลิก ช่วยให้ทำงานได้โดยไม่ต้องต่อกับรถลากจูงระหว่างการขนถ่าย ล้อที่ห้าหมุนได้ 360 องศาช่วยให้เคลื่อนที่ได้ดีแม้ในพื้นที่แคบเช่นเหมืองหินและสถานที่ก่อสร้าง</p><p>ขายึดเสถียรภาพที่พับเก็บได้ช่วยให้มั่นคงระหว่างการทำงานระบบทิ้ง ในขณะที่เบรกจอดรถที่ทำงานอัตโนมัติช่วยให้ปลอดภัยบนทางลาดชัน เหมาะสำหรับการขนส่งวัสดุจากเหมืองหินไปยังเครื่องบด</p>",
				specifications: {
					"ความจุในการบรรทุก": "30-50 ตัน",
					"ความเข้ากันได้กับตู้คอนเทนเนอร์": "ไม",
					"วัสดุโครงสร้าง": "เหล็ก Q345B",
					"การเคลือบ": "สเปรย์สังกะสี-อลูมิเนียม",
					"ล็อคบิด": "ไม",
					"การกำหนดค่าชุดเพลา": "4 เพลา",
					"ระบบกันสะเทือน": "สปริงกล",
					"ความยาวรวม": "9-12 เมตร",
					"น้ำหนักเปล่า": "7.5-10 ตัน"
				},
				features: [
					"ล้อที่ห้าหมุนได้ 360 องศา",
					"กระบอกสูบ 220 บาร์ติดตั้งด้านหน้า",
					"ขายึดเสถียรภาพที่พับเก็บได้",
					"ถังอากาศคู่",
					"ไฟทำงาน LED",
					"เบรกจอดรถที่ทำงานอัตโนมัติ"
				]
			}
		},
		images: [
			"./product/dump_trailer2.jpg"
		],
		related: [8, 10]
	},

	10: {
		id: 10,
		brochureUrl: {
			en: "./img/brochure.pdf",
			th: "./img/brochure.pdf"
		},
		translations: {
			en: {
				name: "Cargo Semi-trailer",
				series: "Cargo Trailer",
				description: "Weatherproof freight transport with customizable compartmentalization.",
				detailedDescription: "<p>Enclosed semi-trailer with corrugated aluminum walls and reinforced flooring. Features E-track lashing system for secure cargo restraint and 10 roof vents for proper ventilation.</p><p>Supports temperature-controlled variants and configurable internal partitions for mixed cargo. The 2.5m rear roller door provides full access for loading/unloading, while corner impact guards protect against docking damage.</p>",
				specifications: {
					"Payload Capacity": "25-35 tonnes",
					"Container Compatibility": "N/A",
					"Frame Material": "Q235 Steel",
					"Coating": "Cathodic E-Coating",
					"Twist Locks": "N/A",
					"Axle Configuration": "2-3 Axles",
					"Suspension": "Air Suspension",
					"Overall Length": "13.6m",
					"Tare Weight": "6.0-7.5 tonnes"
				},
				features: [
					"2.5m rear roller door",
					"E-track lashing system",
					"10 roof vents",
					"Plywood/steel composite floor",
					"Refrigeration unit prep",
					"Corner impact guards"
				]
			},
			th: {
				name: "รถพ่วงกึ่งพ่วงบรรทุกสินค้า",
				series: "รถพ่วงบรรทุกสินค้า",
				description: "การขนส่งสินค้าที่กันน้ำได้พร้อมระบบแบ่งส่วนที่ปรับแต่งได้",
				detailedDescription: "<p>รถพ่วงกึ่งพ่วงแบบปิดด้วยผนังอลูมิเนียมลูกฟูกและพื้นผิวเสริมกำลัง ระบบยึดสินค้า E-track สำหรับยึดสินค้าอย่างปลอดภัยและช่องระบายอากาศบนหลังคา 10 ช่อง</p><p>รองรับรุ่นควบคุมอุณหภูมิและพาร์ติชั่นภายในที่ปรับแต่งได้สำหรับสินค้าประเภทผสม ประตูม้วนด้านหลังขนาด 2.5 เมตรช่วยให้เข้าถึงได้เต็มที่สำหรับการบรรทุก/ขนถ่ายสินค้า ในขณะที่กันชนมุมป้องกันความเสียหายระหว่างการเทียบท่า</p>",
				specifications: {
					"ความจุในการบรรทุก": "25-35 ตัน",
					"ความเข้ากันได้กับตู้คอนเทนเนอร์": "ไม",
					"วัสดุโครงสร้าง": "เหล็ก Q235",
					"การเคลือบ": "การเคลือบแบบแคโทดิก",
					"ล็อคบิด": "ไม",
					"การกำหนดค่าชุดเพลา": "2-3 เพลา",
					"ระบบกันสะเทือน": "ระบบกันสะเทือนด้วยอากาศ",
					"ความยาวรวม": "13.6 เมตร",
					"น้ำหนักเปล่า": "6.0-7.5 ตัน"
				},
				features: [
					"ประตูม้วนด้านหลังขนาด 2.5 เมตร",
					"ระบบยึดสินค้า E-track",
					"ช่องระบายอากาศบนหลังคา 10 ช่อง",
					"พื้นผิวผสมไม้อัด/เหล็ก",
					"เตรียมพร้อมสำหรับหน่วยทำความเย็น",
					"กันชนมุมป้องกัน"
				]
			}
		},
		images: [
			"./product/cargo_semi.jpg",
			"./product/cargo_semi1.jpg",
			"./product/cargo_semi2.jpg"
		],
		related: [7, 11]
	},

	11: {
		id: 11,
		brochureUrl: {
			en: "./img/brochure.pdf",
			th: "./img/brochure.pdf"
		},
		translations: {
			en: {
				name: "Dump (Front End Tipping)",
				series: "Dumper Trailer",
				description: "Forward discharge for precise material placement in landscaping/agriculture.",
				detailedDescription: "<p>Front-hinged design with hydraulic push cylinders that lift the entire cargo bed forward (55' angle), enabling controlled dumping against barriers or into trenches. Low-profile chassis maintains stability with center of gravity at just 1.1m.</p><p>Hydraulic safety props prevent accidental lowering during maintenance, and the moisture-sealed wiring ensures reliability in wet conditions. Ideal for landscaping, trench work, and agricultural applications.</p>",
				specifications: {
					"Payload Capacity": "20-35 tonnes",
					"Container Compatibility": "N/A",
					"Frame Material": "Q345B Steel",
					"Coating": "Epoxy-PU Hybrid",
					"Twist Locks": "N/A",
					"Axle Configuration": "2-3 Axles",
					"Suspension": "Parabolic Springs",
					"Overall Length": "7-9m",
					"Tare Weight": "4.5-6.0 tonnes"
				},
				features: [
					"Low-profile chassis (CG height: 1.1m)",
					"55' forward tip angle",
					"Hydraulic safety props",
					"Spray-on bed liner",
					"Moisture-sealed wiring",
					"One-touch tarp control"
				]
			},
			th: {
				name: "รถดัมพ์ (ทิ้งด้านหน้า)",
				series: "รถพ่วงบรรทุก",
				description: "การปล่อยด้านหน้าเพื่อการวางวัสดุที่แม่นยำในการจัดสวน/เกษตรกรรม",
				detailedDescription: "<p>ออกแบบบานพับด้านหน้าพร้อมกระบอกไฮดรอลิกที่ยกเตียงสินค้าทั้งหมดไปด้านหน้า (มุม 55 องศา) ช่วยให้การทิ้งวัสดุเป็นไปอย่างควบคุมได้กับสิ่งกีดขวางหรือลงในคูน้ำ โครงสร้างแบบต่ำช่วยให้มั่นคงด้วยจุดศูนย์ถ่วงที่เพียง 1.1 เมตร</p><p>ค้ำยันความปลอดภัยไฮดรอลิกป้องกันการลดระดับโดยบังเอิญระหว่างการบำรุงรักษา และระบบสายไฟป้องกันความชื้นช่วยให้เชื่อถือได้ในสภาพเปียกชื้น เหมาะสำหรับการจัดสวน งานคูน้ำ และการใช้งานทางการเกษตร</p>",
				specifications: {
					"ความจุในการบรรทุก": "20-35 ตัน",
					"ความเข้ากันได้กับตู้คอนเทนเนอร์": "ไม",
					"วัสดุโครงสร้าง": "เหล็ก Q345B",
					"การเคลือบ": "อีพอกซี-พียูไฮบริด",
					"ล็อคบิด": "ไม",
					"การกำหนดค่าชุดเพลา": "2-3 เพลา",
					"ระบบกันสะเทือน": "สปริงพาราโบลา",
					"ความยาวรวม": "7-9 เมตร",
					"น้ำหนักเปล่า": "4.5-6.0 ตัน"
				},
				features: [
					"โครงสร้างแบบต่ำ (ความสูงจุดศูนย์ถ่วง: 1.1 เมตร)",
					"มุมเอียงไปด้านหน้า 55 องศา",
					"ค้ำยันความปลอดภัยไฮดรอลิก",
					"พื้นผิวเคลือบสเปรย์",
					"ระบบสายไฟป้องกันความชื้น",
					"ควบคุมผ้าใบกันน้ำแบบสัมผัสเดียว"
				]
			}
		},
		images: [
			"./product/Dump_frontend1.jpg",
			"./product/Dump_frontend.jpg"
		],
		related: [8, 11,12]
	},
	12: {
		id: 12,
		brochureUrl: {
			en: "./img/brochure.pdf",
			th: "./img/brochure.pdf"
		},
		translations: {
			en: {
				name: "Cargo Body and Full-trailer",
				series: "Cargo Trailer",
				description: "Aerodynamic regional distribution with 12% fuel savings.",
				detailedDescription: "<p>Rigid-frame freight carrier with aerodynamic aluminum body and wide loading access. Features integrated dock leveler compatibility and anti-skid diamond flooring for warehouse efficiency.</p><p>The roof-mounted solar panels power onboard systems while telematics port enables fleet monitoring. With 270' rear door swing and 8 lashing rails (3t capacity), this trailer offers exceptional versatility for last-mile delivery operations.</p>",
				specifications: {
					"Payload Capacity": "30-45 tonnes",
					"Container Compatibility": "N/A",
					"Frame Material": "Q345 Steel",
					"Coating": "Electrostatic Powder",
					"Twist Locks": "N/A",
					"Axle Configuration": "3-4 Axles",
					"Suspension": "Air Ride",
					"Overall Length": "12-14m",
					"Tare Weight": "7.0-9.0 tonnes"
				},
				features: [
					"270' rear door swing",
					"Anti-skid diamond flooring",
					"Telematics port (CANbus)",
					"8 lashing rails (3t capacity)",
					"Roof-mounted solar panels",
					"EU WVTA certified"
				]
			},
			th: {
				name: "ตัวถังสินค้าและรถพ่วงเต็มรูปแบบ",
				series: "รถพ่วงบรรทุกสินค้า",
				description: "การกระจายสินค้าระดับภูมิภาคแบบแอร์โอดนามิกส์ประหยัดเชื้อเพลิง 12%",
				detailedDescription: "<p>รถขนส่งสินค้าโครงแข็งแรงด้วยตัวถังอลูมิเนียมแอร์โอดนามิกส์และการเข้าถึงการบรรทุกที่กว้างขวาง มีความเข้ากันได้กับด็อกค์เลเวลเลอร์และพื้นผิวเพชรกันลื่นเพื่อประสิทธิภาพในคลังสินค้า</p><p>แผงโซลาร์เซลล์บนหลังคาให้พลังงานกับระบบในรถ ในขณะที่พอร์ตเทเลเมติกส์ช่วยให้ติดตามยานพาหนะได้ ด้วยประตูด้านหลังที่เปิดได้ 270 องศาและรางยึด 8 จุด (ความจุ 3 ตัน) รถพ่วงนี้มีความหลากหลายอย่างมากสำหรับการส่งสินค้าในระยะสุดท้าย</p>",
				specifications: {
					"ความจุในการบรรทุก": "30-45 ตัน",
					"ความเข้ากันได้กับตู้คอนเทนเนอร์": "ไม",
					"วัสดุโครงสร้าง": "เหล็ก Q345",
					"การเคลือบ": "ผงไฟฟ้าสถิต",
					"ล็อคบิด": "ไม",
					"การกำหนดค่าชุดเพลา": "3-4 เพลา",
					"ระบบกันสะเทือน": "ระบบลม",
					"ความยาวรวม": "12-14 เมตร",
					"น้ำหนักเปล่า": "7.0-9.0 ตัน"
				},
				features: [
					"ประตูด้านหลังเปิดได้ 270 องศา",
					"พื้นผิวเพชรกันลื่น",
					"พอร์ตเทเลเมติกส์ (CANbus)",
					"รางยึด 8 จุด (ความจุ 3 ตัน)",
					"แผงโซลาร์เซลล์บนหลังคา",
					"ผ่านการรับรอง EU WVTA"
				]
			}
		},
		images: [
			"./product/cargo_full.jpg",
			"./product/cargo_full1.jpg"
		],
		related: [10, 12]
	},	

	13: {
		id: 13,
		brochureUrl: {
			en: "./img/brochure.pdf",
			th: "./img/brochure.pdf"
		},
		translations: {
			en: {
				name: "Side Curtain (32 Pallets)",
				series: "Curtainsider Trailer",
				description: "High-density pallet transport with optimized 32-pallet capacity.",
				detailedDescription: "<p>Specialized curtainside trailer engineered for maximum pallet density with space for 32 standard EUR-pallets (1200¡Á800mm). Features reinforced longitudinal beams and anti-sway roof bows to maintain structural integrity during high-volume transport operations.</p><p>The 850g/m2 PVC-coated polyester curtains provide superior weather protection while aluminum roof bows reduce tare weight. Ideal for warehouse-to-retail distribution with frequent loading/unloading requirements.</p>",
				specifications: {
					"Payload Capacity": "24-30 tonnes",
					"Container Compatibility": "N/A",
					"Frame Material": "Q345 Steel",
					"Coating": "Epoxy Primer + PU Topcoat",
					"Twist Locks": "N/A",
					"Axle Configuration": "3 Axles",
					"Suspension": "Air Suspension",
					"Overall Length": "13.6m",
					"Tare Weight": "6.8-7.5 tonnes"
				},
				features: [
					"32 EUR-pallet capacity (1200¡Á800mm)",
					"850g/m2 PVC-coated polyester curtains",
					"Reinforced aluminum roof bows",
					"Roller shutter rear door",
					"E-track lashing system (every 500mm)",
					"LED interior lighting package"
				]
			},
			th: {
				name: "ผ้าใบกั้นข้าง (32 พาเลท)",
				series: "รถพ่วงผ้าใบ",
				description: "การขนส่งพาเลทความหนาแน่นสูงด้วยความจุ 32 พาเลทที่ปรับให้เหมาะสม",
				detailedDescription: "<p>รถพ่วงผ้าใบแบบพิเศษที่ออกแบบมาสำหรับความหนาแน่นของพาเลทสูงสุด พร้อมพื้นที่สำหรับพาเลทมาตรฐาน EUR ขนาด 32 ชิ้น (1200¡Á800 มม.) มีคานตามยาวเสริมกำลังและคานหลังคาแบบป้องกันการแกว่งเพื่อรักษาความสมบูรณ์ของโครงสร้างระหว่างการดำเนินงานขนส่งปริมาณสูง</p><p>ผ้าใยโพลีเอสเตอร์เคลือบ PVC 850g/m2 ให้การป้องกันสภาพอากาศที่เหนือกว่า ในขณะที่คานหลังคาอลูมิเนียมช่วยลดน้ำหนักรถพ่วง เหมาะสำหรับการกระจายสินค้าจากคลังสินค้าไปยังร้านค้าปลีกที่มีข้อกำหนดการบรรทุก/ขนถ่ายบ่อยครั้ง</p>",
				specifications: {
					"ความจุในการบรรทุก": "24-30 ตัน",
					"ความเข้ากันได้กับตู้คอนเทนเนอร์": "ไม",
					"วัสดุโครงสร้าง": "เหล็ก Q345",
					"การเคลือบ": "สีรองพื้นอีพอกซี + สีทับหน้า PU",
					"ล็อคบิด": "ไม",
					"การกำหนดค่าชุดเพลา": "3 เพลา",
					"ระบบกันสะเทือน": "ระบบกันสะเทือนด้วยอากาศ",
					"ความยาวรวม": "13.6 เมตร",
					"น้ำหนักเปล่า": "6.8-7.5 ตัน"
				},
				features: [
					"ความจุพาเลท EUR 32 ชิ้น (1200¡Á800 มม.)",
					"ผ้าใยโพลีเอสเตอร์เคลือบ PVC 850g/m2",
					"คานหลังคาอลูมิเนียมเสริมกำลัง",
					"ประตูหลังแบบม้วน",
					"ระบบยึดสินค้า E-track (ทุกๆ 500 มม.)",
					"ชุดไฟภายในแบบ LED"
				]
			}
		},
		images: [
			"./product/side_curtain1.jpg",
			"./product/side_curtain_32.png",
			"./product/side_curtain.jpg"
		],
		related: [14, 15]
	},
	14: {
		id: 14,
		brochureUrl: {
			en: "./img/brochure.pdf",
			th: "./img/brochure.pdf"
		},
		translations: {
			en: {
				name: "Full Sliding Side Curtain",
				series: "Curtainsider Trailer",
				description: "Complete side access system for rapid full-length loading.",
				detailedDescription: "<p>Innovative curtainside design featuring continuous sliding mechanisms along both sides, enabling full-length access for simultaneous loading by multiple forklifts. The patented roller track system allows single-person operation with smooth curtain movement even under load.</p><p>Integrated rain gutters and dual-seal protection prevent water ingress, while reinforced corner protectors withstand frequent impact during dock operations. Perfect for high-turnover logistics centers with time-sensitive loading requirements.</p>",
				specifications: {
					"Payload Capacity": "25-32 tonnes",
					"Container Compatibility": "N/A",
					"Frame Material": "Q345 Steel",
					"Coating": "Hot-dip Galvanized",
					"Twist Locks": "N/A",
					"Axle Configuration": "3 Axles",
					"Suspension": "Air Suspension",
					"Overall Length": "13.6m",
					"Tare Weight": "7.0-7.8 tonnes"
				},
				features: [
					"Full-length sliding mechanism (both sides)",
					"One-person operation system",
					"Dual-seal weather protection",
					"Impact-resistant corner guards",
					"Quick-release tensioning system",
					"Anti-pinch safety sensors"
				]
			},
			th: {
				name: "ผ้าใบเลื่อนด้านข้างแบบเต็ม",
				series: "รถพ่วงผ้าใบ",
				description: "ระบบการเข้าถึงด้านข้างแบบสมบูรณ์สำหรับการบรรทุกแบบเต็มความยาวอย่างรวดเร็ว",
				detailedDescription: "<p>การออกแบบผ้าใบแบบใหม่ที่มีกลไกการเลื่อนอย่างต่อเนื่องตามแนวด้านข้างทั้งสองด้าน ช่วยให้เข้าถึงได้เต็มความยาวสำหรับการบรรทุกพร้อมกันด้วยรถยกหลายคัน ระบบรางลูกกลิ้งที่จดสิทธิบัตรช่วยให้สามารถใช้งานได้โดยคนเดียวโดยมีการเคลื่อนไหวของผ้าใบที่ราบรื่นแม้ภายใต้ภาระหนัก</p><p>รางน้ำฝนแบบบูรณาการและการป้องกันด้วยซีลคู่ป้องกันไม่ให้น้ำเข้า ในขณะที่ตัวป้องกันมุมเสริมกำลังทนทานต่อการกระแทกบ่อยครั้งระหว่างการทำงานที่ท่า เหมาะสมที่สุดสำหรับศูนย์ลอจิสติกส์ที่มีการหมุนเวียนสูงที่มีข้อกำหนดการบรรทุกที่ไวต่อเวลา</p>",
				specifications: {
					"ความจุในการบรรทุก": "25-32 ตัน",
					"ความเข้ากันได้กับตู้คอนเทนเนอร์": "ไม",
					"วัสดุโครงสร้าง": "เหล็ก Q345",
					"การเคลือบ": "ชุบสังกะสีแบบจุ่มร้อน",
					"ล็อคบิด": "ไม",
					"การกำหนดค่าชุดเพลา": "3 เพลา",
					"ระบบกันสะเทือน": "ระบบกันสะเทือนด้วยอากาศ",
					"ความยาวรวม": "13.6 เมตร",
					"น้ำหนักเปล่า": "7.0-7.8 ตัน"
				},
				features: [
					"กลไกการเลื่อนแบบเต็มความยาว (ทั้งสองด้าน)",
					"ระบบการทำงานโดยคนเดียว",
					"การป้องกันสภาพอากาศด้วยซีลคู่",
					"ตัวป้องกันมุมทนการกระแทก",
					"ระบบตึงแบบปลดอย่างรวดเร็ว",
					"เซ็นเซอร์ความปลอดภัยป้องกันการหนีบ"
				]
			}
		},
		images: [
			"./product/side_curtain_full.jpg",
			"./product/side_curtain_side.jpg"
		],
		related: [13, 16]
	},
	15: {
		id: 15,
		brochureUrl: {
			en: "./img/brochure.pdf",
			th: "./img/brochure.pdf"
		},
		translations: {
			en: {
				name: "Side Curtain (Normal & Quick Slide)",
				series: "Curtainsider Trailer",
				description: "Hybrid system combining standard and rapid-access sections.",
				detailedDescription: "<p>Versatile curtainside solution featuring standard fixed sections combined with quick-slide segments at strategic positions. The rapid-deployment sections open in under 15 seconds using the patented glide system, while standard sections provide cost-effective coverage.</p><p>Dual-layer UV-resistant PVC (1000D) extends service life in tropical climates, and removable curtain panels allow flexible configuration. Ideal for mixed-load operations requiring both security and frequent partial access.</p>",
				specifications: {
					"Payload Capacity": "24-30 tonnes",
					"Container Compatibility": "N/A",
					"Frame Material": "Q345 Steel",
					"Coating": "Epoxy Primer + PU",
					"Twist Locks": "N/A",
					"Axle Configuration": "2-3 Axles",
					"Suspension": "Mechanical/Air",
					"Overall Length": "10-13.6m",
					"Tare Weight": "6.5-7.2 tonnes"
				},
				features: [
					"Quick-slide sections at 1/3 & 2/3 positions",
					"Removable curtain panels",
					"Dual-layer UV-resistant PVC (1000D)",
					"Retractable load restraint bars",
					"Integrated securing rings",
					"Lightweight aluminum frame"
				]
			},
			th: {
				name: "ผ้าใบกั้นข้าง (แบบปกติและแบบเลื่อนเร็ว)",
				series: "รถพ่วงผ้าใบ",
				description: "ระบบไฮบริดที่รวมส่วนมาตรฐานและส่วนการเข้าถึงอย่างรวดเร็ว",
				detailedDescription: "<p>โซลูชันผ้าใบกั้นข้างอเนกประสงค์ที่มีส่วนคงที่มาตรฐานรวมกับส่วนเลื่อนเร็วในตำแหน่งเชิงกลยุทธ์ ส่วนที่เปิดใช้งานได้อย่างรวดเร็วจะเปิดในเวลาน้อยกว่า 15 วินาทีโดยใช้ระบบรางที่จดสิทธิบัตร ในขณะที่ส่วนมาตรฐานให้ความคุ้มครองที่มีประสิทธิภาพด้านต้นทุน</p><p>PVC ทน UV แบบสองชั้น (1000D) ขยายอายุการใช้งานในสภาพอากาศแบบเขตร้อน และแผงผ้าใบที่ถอดออกได้ช่วยให้สามารถปรับแต่งได้อย่างยืดหยุ่น เหมาะสำหรับการทำงานที่มีการบรรทุกแบบผสมซึ่งต้องการทั้งความปลอดภัยและการเข้าถึงบางส่วนบ่อยครั้ง</p>",
				specifications: {
					"ความจุในการบรรทุก": "24-30 ตัน",
					"ความเข้ากันได้กับตู้คอนเทนเนอร์": "ไม",
					"วัสดุโครงสร้าง": "เหล็ก Q345",
					"การเคลือบ": "สีรองพื้นอีพอกซี + PU",
					"ล็อคบิด": "ไม",
					"การกำหนดค่าชุดเพลา": "2-3 เพลา",
					"ระบบกันสะเทือน": "กล/อากาศ",
					"ความยาวรวม": "10-13.6 เมตร",
					"น้ำหนักเปล่า": "6.5-7.2 ตัน"
				},
				features: [
					"ส่วนเลื่อนเร็วที่ตำแหน่ง 1/3 และ 2/3",
					"แผงผ้าใบที่ถอดออกได้",
					"PVC ทน UV แบบสองชั้น (1000D)",
					"คานยึดน้ำหนักแบบหดได้",
					"ห่วงยึดแบบบูรณาการ",
					"โครงอลูมิเนียมน้ำหนักเบา"
				]
			}
		},
		images: [
			"./product/side_curtain_normal1.jpg",
			"./product/side_curtain_normal2.jpg"
		],
		related: [14, 16]
	},
	16: {
		id: 16,
		brochureUrl: {
			en: "./img/brochure.pdf",
			th: "./img/brochure.pdf"
		},
		translations: {
			en: {
				name: "Side Curtain (The Lifting Roof)",
				series: "Curtainsider Trailer",
				description: "Hydraulic roof system for oversized cargo handling.",
				detailedDescription: "<p>Specialized curtainside trailer with hydraulic roof lifting system that increases internal height by 1.2m. The synchronized dual-cylinder mechanism operates at 220bar pressure for smooth elevation, with automatic safety locks engaging at all height positions.</p><p>Clear PVC vision panels provide natural light during loading, while the waterproof sealing system maintains weather protection when elevated. Designed for tall machinery, stacked pallets, and irregularly shaped industrial equipment.</p>",
				specifications: {
					"Payload Capacity": "22-28 tonnes",
					"Container Compatibility": "N/A",
					"Frame Material": "Q345 Steel + Aluminum",
					"Coating": "Powder Coating",
					"Twist Locks": "N/A",
					"Axle Configuration": "3 Axles",
					"Suspension": "Air Suspension",
					"Overall Length": "13.6m",
					"Tare Weight": "7.5-8.5 tonnes"
				},
				features: [
					"Hydraulic roof lift (+1.2m height)",
					"Dual-ply PVC with vision panels",
					"Roof position safety locks",
					"Wireless remote control",
					"Enhanced structural reinforcement",
					"Waterproof seal system"
				]
			},
			th: {
				name: "ผ้าใบกั้นข้าง (หลังคายกได้)",
				series: "รถพ่วงผ้าใบ",
				description: "ระบบหลังคาไฮดรอลิกสำหรับการจัดการสินค้าขนาดใหญ่",
				detailedDescription: "<p>รถพ่วงผ้าใบแบบพิเศษที่มีระบบยกหลังคาไฮดรอลิกที่เพิ่มความสูงภายใน 1.2 เมตร กลไกกระบอกสูบคู่แบบซิงโครไนซ์ทำงานที่ความดัน 220 บาร์เพื่อยกอย่างราบรื่น โดยมีล็อคความปลอดภัยอัตโนมัติที่ทำงานในทุกตำแหน่งความสูง</p><p>แผงกระจายแสง PVC ช่วยให้มีแสงธรรมชาติระหว่างการบรรทุก ในขณะที่ระบบซีลกันน้ำช่วยรักษาการป้องกันสภาพอากาศเมื่อยกขึ้น ออกแบบมาสำหรับเครื่องจักรสูง พาเลทซ้อน และอุปกรณ์อุตสาหกรรมที่มีรูปร่างไม่สม่ำเสมอ</p>",
				specifications: {
					"ความจุในการบรรทุก": "22-28 ตัน",
					"ความเข้ากันได้กับตู้คอนเทนเนอร์": "ไม",
					"วัสดุโครงสร้าง": "เหล็ก Q345 + อลูมิเนียม",
					"การเคลือบ": "การเคลือบผง",
					"ล็อคบิด": "ไม",
					"การกำหนดค่าชุดเพลา": "3 เพลา",
					"ระบบกันสะเทือน": "ระบบกันสะเทือนด้วยอากาศ",
					"ความยาวรวม": "13.6 เมตร",
					"น้ำหนักเปล่า": "7.5-8.5 ตัน"
				},
				features: [
					"ระบบยกหลังคาไฮดรอลิก (+1.2 เมตรความสูง)",
					"PVC สองชั้นพร้อมแผงกระจายแสง",
					"ล็อคความปลอดภัยตำแหน่งหลังคา",
					"รีโมทคอนโทรลไร้สาย",
					"โครงสร้างเสริมกำลังที่ได้รับการปรับปรุง",
					"ระบบซีลกันน้ำ"
				]
			}
		},
		images: [
			"./product/side_curtain_side3.jpg",
			"./product/side_curtain_side2.jpg"
		],
		related: [2]
	},
	
	17: {
		id: 17,
		brochureUrl: {
			en: "./img/brochure.pdf",
			th: "./img/brochure.pdf"
		},
		translations: {
			en: {
				name: "Dry Van Semi-trailer",
				series: "Dry Van Trailer",
				description: "Standard enclosed trailer for general freight with optimal cargo security.",
				detailedDescription: "<p>Our Dry Van Semi-trailer features a robust steel frame with aluminum cladding for the perfect balance of strength and weight efficiency. The smooth interior walls and reinforced flooring accommodate diverse cargo types while protecting goods from weather and theft.</p><p>With its aerodynamic profile and low-friction underbody, this trailer delivers 8-12% better fuel efficiency than conventional designs. The integrated E-track system provides versatile cargo securing options, making it ideal for consumer goods distribution and general freight operations.</p>",
				specifications: {
					"Payload Capacity": "24-30 tonnes",
					"Internal Dimensions": "13.62m × 2.48m × 2.70m",
					"Frame Material": "Q345 Steel + Aluminum Cladding",
					"Coating": "Electrocoating + Powder Coating",
					"Floor Material": "Marine Plywood (40mm)",
					"Axle Configuration": "3 Axles",
					"Suspension": "Air Suspension",
					"Overall Length": "13.7m",
					"Tare Weight": "6.2-7.1 tonnes"
				},
				features: [
					"Aerodynamic roof design",
					"Full E-track lashing system",
					"Rear impact protection (ECER55)",
					"LED marker lights",
					"Anti-corrosion galvanized underrun",
					"Removable bulkhead"
				]
			},
			th: {
				name: "รถพ่วงกึ่งพ่วงแบบแห้ง",
				series: "รถพ่วงแบบแห้ง",
				description: "รถพ่วงแบบปิดมาตรฐานสำหรับสินค้าทั่วไปที่มีความปลอดภัยในการขนส่งสูงสุด",
				detailedDescription: "<p>รถพ่วงกึ่งพ่วงแบบแห้งของเรามีโครงเหล็กที่แข็งแรงพร้อมแผงอลูมิเนียมสำหรับสมดุลระหว่างความแข็งแรงและน้ำหนักที่สมบูรณ์แบบ ผนังภายในเรียบและพื้นเสริมแรงรองรับสินค้าหลากหลายประเภท ในขณะที่ปกป้องสินค้าจากสภาพอากาศและการโจรกรรม</p><p>ด้วยรูปร่างแอโรไดนามิกและใต้ท้องรถที่มีแรงเสียดทานต่ำ รถพ่วงนี้ช่วยประหยัดน้ำมันได้ดีกว่าแบบดั้งเดิม 8-12% ระบบ E-track ที่รวมอยู่ให้ตัวเลือกการยึดสินค้าที่หลากหลาย ทำให้เหมาะสำหรับการกระจายสินค้าอุปโภคบริโภคและการขนส่งสินค้าทั่วไป</p>",
				specifications: {
					"ความจุในการบรรทุก": "24-30 ตัน",
					"ขนาดภายใน": "13.62m × 2.48m × 2.70m",
					"วัสดุโครง": "เหล็ก Q345 + แผงอลูมิเนียม",
					"การเคลือบ": "อิเล็กโทรโคตติ้ง + ผงเคลือบ",
					"วัสดุพื้น": "ไม้อัดกันน้ำ (40mm)",
					"การกำหนดค่าเพลา": "3 เพลา",
					"ระบบกันสะเทือน": "ระบบลม",
					"ความยาวโดยรวม": "13.7m",
					"น้ำหนักรถเปล่า": "6.2-7.1 ตัน"
				},
				features: [
					"การออกแบบหลังคาแบบแอโรไดนามิก",
					"ระบบยึดสินค้า E-track แบบเต็ม",
					"กันชนด้านหลังป้องกันการชน (ECER55)",
					"ไฟแสดงตำแหน่ง LED",
					"ป้องกันการกัดกร่อนใต้ท้องรถ",
					"ผนังกั้นถอดได้"
				]
			}
		},
		images: [
			"./product/dry_van_semi.jpg",
			"./product/dry_van_semi1.jpg"
		],
		related: [19, 20]
	},

	18: {
		id: 18,
		brochureUrl: {
			en: "./img/brochure.pdf",
			th: "./img/brochure.pdf"
		},
		translations: {
			en: {
				name: "Dry Van Full Trailer",
				series: "Dry Van Trailer",
				description: "Rigid-body trailer with superior maneuverability for urban distribution.",
				detailedDescription: "<p>Complete rigid-frame solution featuring a reinforced monocoque structure that eliminates the need for a fifth wheel. The optimized weight distribution provides exceptional stability during urban navigation while maintaining a 25-tonne payload capacity.</p><p>Wide 90° rear door opening and optional side doors enable multi-point access for efficient loading/unloading. The integrated telematics platform supports real-time location tracking and temperature monitoring, perfect for high-value cargo in regional distribution networks.</p>",
					specifications: {
					"Payload Capacity": "22-25 tonnes",
					"Internal Dimensions": "7.82m × 2.48m × 2.70m",
					"Frame Material": "High-strength Steel",
					"Coating": "Cathodic Dip Coating",
					"Floor Material": "Steel Composite",
					"Axle Configuration": "2 Axles",
					"Suspension": "Parabolic Spring",
					"Overall Length": "8.5m",
					"Tare Weight": "4.8-5.5 tonnes"
				},
				features: [
					"90° rear door opening",
					"Integrated telematics platform",
					"Reinforced corner posts",
					"Laminated side walls",
					"Underfloor storage compartments",
					"Anti-lock braking system (ABS)"
				]
			},
			th: {
					name: "รถพ่วงเต็มรูปแบบแบบแห้ง",
					series: "รถพ่วงแบบแห้ง",
					description: "รถพ่วงโครงแข็งที่มีความคล่องตัวสูงสำหรับการกระจายสินค้าในเขตเมือง",
					detailedDescription: "<p>โซลูชันโครงแข็งสมบูรณ์ที่มีโครงสร้างโมโนค็อกเสริมแรงซึ่งไม่จำเป็นต้องใช้ล้อที่ห้า การกระจายน้ำหนักที่เหมาะสมให้ความมั่นคงสูงสุดระหว่างการเดินทางในเมือง ในขณะที่ยังคงความจุในการบรรทุก 25 ตัน</p><p>ประตูหลังเปิดกว้าง 90 องศา และประตูด้านข้างเสริมช่วยให้เข้าถึงได้หลายจุดสำหรับการบรรทุก/ขนถ่ายที่มีประสิทธิภาพ แพลตฟอร์ม telematics ที่รวมอยู่ช่วยติดตามตำแหน่งแบบเรียลไทม์และตรวจสอบอุณหภูมิ เหมาะสำหรับสินค้ามูลค่าสูงในเครือข่ายการกระจายสินค้าในภูมิภาค</p>",
					specifications: {
						"ความจุในการบรรทุก": "22-25 ตัน",
						"ขนาดภายใน": "7.82m × 2.48m × 2.70m",
						"วัสดุโครง": "เหล็กความแข็งแรงสูง",
						"การเคลือบ": "เคลือบแบบจุ่มแคโทด",
						"วัสดุพื้น": "คอมโพสิตเหล็ก",
						"การกำหนดค่าเพลา": "2 เพลา",
						"ระบบกันสะเทือน": "สปริงพาราโบลา",
						"ความยาวโดยรวม": "8.5m",
						"น้ำหนักรถเปล่า": "4.8-5.5 ตัน"
					},
					features: [
						"ประตูหลังเปิดกว้าง 90 องศา",
						"แพลตฟอร์ม telematics แบบบูรณาการ",
						"เสามุมเสริมแรง",
						"ผนังด้านลามิเนต",
						"ช่องเก็บของใต้พื้น",
						"ระบบเบรกป้องกันล้อล็อก (ABS)"
				]
			}
		},
		images: [
			"./product/dry_van_full.jpg",
			"./product/dry_van_full1.jpg"
		],
		related: [18, 20]
	},

	19: {
		id: 19,
		brochureUrl: {
			en: "./img/brochure.pdf",
			th: "./img/brochure.pdf"
		},
		translations: {
			en: {
				name: "Reefer on Truck",
				series: "Refrigerated Transport",
				description: "Rigid refrigerated vehicle for last-mile cold chain distribution.",
				detailedDescription: "<p>Complete refrigerated truck solution with integrated Carrier® or Thermo King® cooling unit mounted on a 6-10 tonne GVW chassis. The polyurethane foam-insulated body (80mm thickness) maintains precise temperature control from -25°C to +12°C with ±0.5°C accuracy.</p><p>Features dual-compartment capability with separate temperature zones, real-time remote monitoring, and rapid cooling recovery. Ideal for pharmaceuticals, fresh produce, and frozen goods delivery with frequent door openings in urban environments.</p>",
				specifications: {
					"Payload Capacity": "4-8 tonnes",
					"Internal Volume": "18-32 m³",
					"Insulation": "80mm PU Foam (K=0.023W/mK)",
					"Temperature Range": "-25°C to +12°C",
					"Refrigeration Unit": "Carrier Viento® 650",
					"Chassis Options": "Isuzu FVR, Hino 500",
					"Overall Length": "6.5-8.2m",
					"Tare Weight": "3.8-5.2 tonnes"
				},
				features: [
					"Dual-temperature zones",
					"Remote temperature monitoring",
					"Rapid pulldown capability",
					"Stainless steel interior",
					"LED interior lighting",
					"Side access doors"
				]
			},
			th: {
				name: "รถหิ้วแบบรถบรรทุก",
				series: "การขนส่งแบบแช่เย็น",
				description: "รถหิ้วแบบแข็งสำหรับการกระจายสินค้าโซ่เย็นระยะสุดท้าย",
				detailedDescription: "<p>โซลูชันรถหิ้วแบบครบวงจรพร้อมหน่วยทำความเย็น Carrier® หรือ Thermo King® ติดตั้งบนแชสซีน้ำหนักรวม 6-10 ตัน ตัวรถหุ้มฉนวนด้วยโฟมโพลียูรีเทน (หนา 80mm) รักษาอุณหภูมิได้อย่างแม่นยำตั้งแต่ -25°C ถึง +12°C ด้วยความแม่นยำ ±0.5°C</p><p>มีคุณสมบัติห้องคู่พร้อมโซนอุณหภูมิแยกกัน การตรวจสอบระยะไกลแบบเรียลไทม์ และการกู้คืนความเย็นอย่างรวดเร็ว เหมาะอย่างยิ่งสำหรับการส่งมอบยา ผลิตผลสด และสินค้าแช่แข็งที่มีการเปิดประตูบ่อยในสภาพแวดล้อมในเมือง</p>",
				specifications: {
					"ความจุในการบรรทุก": "4-8 ตัน",
					"ปริมาตรภายใน": "18-32 ลบ.ม.",
					"ฉนวน": "โฟม PU 80mm (K=0.023W/mK)",
					"ช่วงอุณหภูมิ": "-25°C ถึง +12°C",
					"หน่วยทำความเย็น": "Carrier Viento® 650",
					"ตัวเลือกแชสซี": "Isuzu FVR, Hino 500",
					"ความยาวโดยรวม": "6.5-8.2m",
					"น้ำหนักรถเปล่า": "3.8-5.2 ตัน"
				},
				features: [
					"โซนอุณหภูมิคู่",
					"ตรวจสอบอุณหภูมิระยะไกล",
					"ความสามารถในการลดอุณหภูมิอย่างรวดเร็ว",
					"ภายในสแตนเลสสตีล",
					"ไฟภายใน LED",
					"ประตูเข้าด้านข้าง"
				]
			}
		},
		images: [
			"./product/reefer_truck.jpg",
			"./product/reefer_truck1.jpg"
		],
		related: [17,18]
	},

	20: {
		id: 20,
		brochureUrl: {
			en: "./img/brochure.pdf",
			th: "./img/brochure.pdf"
		},
		translations: {
			en: {
				name: "Reefer Container Light Weight (26 Pallets)",
				series: "Refrigerated Container",
				description: "Lightweight ISO refrigerated container for intermodal perishable transport.",
				detailedDescription: "<p>Advanced 40ft high-cube reefer container featuring aluminum composite panels that reduce tare weight by 15% while maintaining full 26-pallet capacity. The energy-efficient CARRIER® Neptune® unit with Eco-Drive® technology cuts power consumption by 25% compared to standard models.</p><p>Smart container technology includes dual-temperature capability, remote monitoring via GSM, and automatic data logging. The corrosion-resistant flooring and stainless steel air channels ensure long service life even in high-humidity environments, perfect for seafood and tropical fruit transport.</p>",
				specifications: {
					"Payload Capacity": "28,500 kg",
					"Pallet Capacity": "26 EUR pallets",
					"Internal Dimensions": "11.56m × 2.28m × 2.54m",
					"Insulation": "75mm PU Foam",
					"Temperature Range": "-35°C to +30°C",
					"Refrigeration Unit": "CARRIER® Neptune® APX",
					"Power Supply": "440V/60Hz or 380V/50Hz",
					"Tare Weight": "3,850 kg"
				},
				features: [
					"15% lighter construction",
					"Eco-Drive® energy saving",
					"Remote GSM monitoring",
					"Dual-temperature zones",
					"Corrosion-resistant flooring",
					"Stainless steel air channels"
				]
			},
			th: {
				name: "ตู้คอนเทนเนอร์หิ้วน้ำหนักเบา (26 พาเลท)",
				series: "ตู้คอนเทนเนอร์หิ้ว",
				description: "ตู้คอนเทนเนอร์หิ้ว ISO น้ำหนักเบาสำหรับการขนส่งสินค้าเน่าเสียแบบอินเตอร์โมดัล",
				detailedDescription: "<p>ตู้คอนเทนเนอร์หิ้วขนาด 40 ฟุตแบบสูงที่มีแผงอลูมิเนียมคอมโพสิตที่ช่วยลดน้ำหนักรถเปล่าลง 15% ในขณะที่ยังคงความจุพาเลท 26 พาเลทเต็มรูปแบบ หน่วย CARRIER® Neptune® ที่ประหยัดพลังงานด้วยเทคโนโลยี Eco-Drive® ลดการใช้พลังงานลง 25% เมื่อเทียบกับรุ่นมาตรฐาน</p><p>เทคโนโลยีตู้คอนเทนเนอร์อัจฉริยะรวมถึงความสามารถอุณหภูมิคู่ การตรวจสอบระยะไกลผ่าน GSM และการบันทึกข้อมูลอัตโนมัติ พื้นทนทานต่อการกัดกร่อนและช่องลมสแตนเลสสตีลรับประกันอายุการใช้งานที่ยาวนานแม้ในสภาพแวดล้อมที่มีความชื้นสูง เหมาะอย่างยิ่งสำหรับการขนส่งอาหารทะเลและผลไม้เมืองร้อน</p>",
				specifications: {
					"ความจุในการบรรทุก": "28,500 กก.",
					"ความจุพาเลท": "พาเลทยุโรป 26 พาเลท",
					"ขนาดภายใน": "11.56m × 2.28m × 2.54m",
					"ฉนวน": "โฟม PU 75mm",
					"ช่วงอุณหภูมิ": "-35°C ถึง +30°C",
					"หน่วยทำความเย็น": "CARRIER® Neptune® APX",
					"แหล่งจ่ายไฟ": "440V/60Hz หรือ 380V/50Hz",
					"น้ำหนักรถเปล่า": "3,850 กก."
				},
				features: [
					"โครงสร้างน้ำหนักเบาลง 15%",
					"ประหยัดพลังงานด้วย Eco-Drive®",
					"ตรวจสอบระยะไกลผ่าน GSM",
					"โซนอุณหภูมิคู่",
					"พื้นทนทานต่อการกัดกร่อน",
					"ช่องลมสแตนเลสสตีล"
				]
			}
		},
		images: [
			"./product/reefer_container.png",
			"./product/reefer_container1.png",
			"./product/reefer_container2.png"
		],
		related: [19,20]
	},	
	21: {
		id: 21,
		brochureUrl: {
			en: "./img/brochure.pdf",
			th: "./img/brochure.pdf"
		},
		translations: {
			en: {
				name: "Concrete Mixer (3,4,6,7 Cum)",
				series: "Mixer Trailer",
				description: "Hydraulic drum mixer for ready-mix concrete with multiple capacity options.",
				detailedDescription: "<p>Our concrete mixer series features a heavy-duty inclined drum design with reversible hydraulic rotation for efficient mixing and discharge. The spiral blades are made from Hardox 450 wear-resistant steel, ensuring long service life in abrasive concrete environments.</p><p>With capacities ranging from 3 to 7 cubic meters, these mixers are suitable for various construction projects. The water tank integration system allows on-site concrete hydration control, while the automatic cleaning system reduces maintenance downtime between loads.</p>",
				specifications: {
					"Capacity Options": "3, 4, 6, 7 m3",
					"Mixing Speed": "12-16 rpm",
					"Discharge Time": "<5 minutes (95% discharge)",
					"Drum Material": "Hardox 450 Steel",
					"Hydraulic System": "30-45 L/min @ 220 bar",
					"Water Tank Capacity": "300-650 L",
					"Axle Configuration": "2-3 Axles",
					"Suspension": "Heavy-duty Leaf Spring",
					"Overall Length": "7.5-10.2m",
					"Tare Weight": "6.5-9.8 tonnes"
				},
				features: [
					"Reversible drum rotation",
					"Hardox spiral mixing blades",
					"Integrated water metering system",
					"Automatic drum cleaning",
					"Overload protection",
					"Remote lubrication points"
				]
			},
			th: {
				name: "เครื่องผสมคอนกรีต (3,4,6,7 ลบ.ม.)",
				series: "รถผสมคอนกรีต",
				description: "เครื่องผสมคอนกรีตแบบไฮดรอลิกสำหรับคอนกรีตผสมเสร็จพร้อมตัวเลือกความจุหลากหลายขนาด",
				detailedDescription: "<p>ซีรีส์เครื่องผสมคอนกรีตของเรามีการออกแบบดรัมแบบเอียงที่ทนทานสูง พร้อมการหมุนแบบไฮดรอลิกแบบย้อนกลับได้ เพื่อการผสมและการปล่อยที่มีประสิทธิภาพ ใบมีดเกลียวทำจากเหล็กทนการสึกกร่อน Hardox 450 ซึ่งรับประกันอายุการใช้งานที่ยาวนานในสภาพแวดล้อมคอนกรีตที่กัดกร่อน</p><p>ด้วยความจุตั้งแต่ 3 ถึง 7 ลูกบาศก์เมตร เครื่องผสมเหล่านี้เหมาะสำหรับโครงการก่อสร้างต่างๆ ระบบถังน้ำแบบบูรณาการช่วยควบคุมการเติมน้ำในคอนกรีตได้ในสถานที่ก่อสร้าง ในขณะที่ระบบทำความสะอาดอัตโนมัติช่วยลดระยะเวลาหยุดทำงานสำหรับการบำรุงรักษาระหว่างการใช้งาน</p>",
				specifications: {
					"ตัวเลือกความจุ": "3, 4, 6, 7 ลบ.ม.",
					"ความเร็วในการผสม": "12-16 รอบ/นาที",
					"เวลาในการปล่อย": "<5 นาที (ปล่อย 95%)",
					"วัสดุดรัม": "เหล็ก Hardox 450",
					"ระบบไฮดรอลิก": "30-45 ลิตร/นาที @ 220 บาร์",
					"ความจุถังน้ำ": "300-650 ลิตร",
					"การกำหนดค่าเพลา": "2-3 เพลา",
					"ระบบกันสะเทือน": "สปริงใบแบบทนทานสูง",
					"ความยาวโดยรวม": "7.5-10.2 เมตร",
					"น้ำหนักรถเปล่า": "6.5-9.8 ตัน"
				},
				features: [
					"การหมุนดรัมแบบย้อนกลับได้",
					"ใบมีดผสมเกลียว Hardox",
					"ระบบวัดน้ำแบบบูรณาการ",
					"การทำความสะอาดดรัมอัตโนมัติ",
					"การป้องกันการบรรทุกเกิน",
					"จุดหล่อลื่นระยะไกล"
				]
			}
		},
		images: [
			"./product/mixer_truck1.jpg",
			"./product/mixer_truck.jpg",
			"./product/mixer_truck2.jpg"
		],
		related: [22, 23]
	},
	
	22: {
		id: 22,
		brochureUrl: {
			en: "./img/brochure.pdf",
			th: "./img/brochure.pdf"
		},
		translations: {
			en: {
				name: "Bulk Powder Tanker (32/36 Cum)",
				series: "Bulk Transport",
				description: "Pressurized tank for cement, fly ash, and dry bulk powders.",
				detailedDescription: "<p>Cylindrical pressure vessel designed for pneumatic discharge of dry bulk materials. Features compartmentalized design with 1.5:1 pressure safety factor and working pressure of 2.5 bar. The tank's elliptical heads are computer-optimized for structural integrity.</p><p>Available with lifting axle or heavy-duty leaf spring suspension options. The fluidization system uses perforated PTFE membranes for even material flow, while the safety relief valves and pressure gauges ensure operational security during discharge cycles.</p>",
				specifications: {
					"Capacity Options": "32, 36 m3",
					"Working Pressure": "2.5 bar",
					"Discharge Rate": "1.2-1.8 tonnes/min",
					"Material Thickness": "5-8mm Corten Steel",
					"Compartments": "2-3 Sections",
					"Discharge System": "Pneumatic Fluidization",
					"Axle Configuration": "3 Axles (Lifting Axle Option)",
					"Suspension": "Leaf Spring or Air Suspension",
					"Overall Length": "12.8m",
					"Tare Weight": "8.5-10.2 tonnes"
				},
				features: [
					"PTFE fluidization membranes",
					"Compartmentalized design",
					"Pressure safety system (1.5:1 SF)",
					"Top-mounted ladder access",
					"Dust-tight loading hatches",
					"Grounding system for static control"
				]
			},
			th: {
				name: "ถังบรรจุผงจำนวนมาก (32/36 ลบ.ม.)",
				series: "การขนส่งจำนวนมาก",
				description: "ถังความดันสำหรับปูนซีเมนต์ เถ้าลอย และผงแห้งจำนวนมาก",
				detailedDescription: "<p>ถังความดันทรงกระบอกที่ออกแบบมาสำหรับการขนถ่ายวัสดุแห้งจำนวนมากแบบนิวแมติก มีการออกแบบเป็นช่องโดยมีปัจจัยด้านความปลอดภัยความดัน 1.5:1 และความดันทำงานที่ 2.5 บาร์ ส่วนหัวรูปไข่ของถังได้รับการปรับให้เหมาะสมด้วยคอมพิวเตอร์เพื่อความสมบูรณ์ของโครงสร้าง</p><p>มีตัวเลือกเพลายกหรือระบบกันสะเทือนแบบสปริงใบที่ทนทานสูง ระบบการทำให้เป็นของเหลวใช้เยื่อพรุน PTFE สำหรับการไหลของวัสดุที่สม่ำเสมอ ในขณะที่วาล์วระบายความปลอดภัยและเกจวัดความดันรับประกันความปลอดภัยในการทำงานระหว่างรอบการขนถ่าย</p>",
				specifications: {
					"ตัวเลือกความจุ": "32, 36 ลบ.ม.",
					"ความดันทำงาน": "2.5 บาร์",
					"อัตราการขนถ่าย": "1.2-1.8 ตัน/นาที",
					"ความหนาวัสดุ": "เหล็ก Corten 5-8 มม.",
					"ช่องบรรจุ": "2-3 ส่วน",
					"ระบบขนถ่าย": "การทำให้เป็นของเหลวแบบนิวแมติก",
					"การกำหนดค่าเพลา": "3 เพลา (มีตัวเลือกเพลายก)",
					"ระบบกันสะเทือน": "สปริงใบหรือระบบกันสะเทือนลม",
					"ความยาวโดยรวม": "12.8 เมตร",
					"น้ำหนักรถเปล่า": "8.5-10.2 ตัน"
				},
				features: [
					"เยื่อทำให้เป็นของเหลว PTFE",
					"การออกแบบแบ่งเป็นช่อง",
					"ระบบความปลอดภัยความดัน (ปัจจัยความปลอดภัย 1.5:1)",
					"บันไดเข้าถึงแบบติดตั้งด้านบน",
					"ฝาโหลดป้องกันฝุ่น",
					"ระบบกราวด์สำหรับควบคุมไฟฟ้าสถิต"
				]
			}
		},
		images: [
			"./product/bulk_tank1.jpg",
			"./product/bulk_tank2.jpg",
			"./product/bulk_tank3.jpg"
		],
		related: [21, 23]
	},
	
	23: {
		id: 23,
		brochureUrl: {
			en: "./img/brochure.pdf",
			th: "./img/brochure.pdf"
		},
		translations: {
			en: {
				name: "Self-Powered Bulk Tanker (32/36 Cum)",
				series: "Bulk Transport",
				description: "Engine-driven pneumatic tanker for independent operation.",
				detailedDescription: "<p>Complete bulk transport solution with integrated diesel-powered air compressor system. The dedicated 150-200hp engine drives a rotary screw compressor that delivers 12-18 m3/min airflow at 3.5 bar pressure, enabling discharge without external power sources.</p><p>Ideal for remote construction sites and mining operations. The sound-proofed engine compartment reduces noise pollution, while the hydraulic lifting axle system optimizes weight distribution when loaded or empty. Includes remote monitoring of tank pressure and material level sensors.</p>",
				specifications: {
					"Capacity Options": "32, 36 m3",
					"Engine Power": "150-200 hp Diesel",
					"Air Delivery": "12-18 m3/min @ 3.5 bar",
					"Discharge Rate": "1.8-2.4 tonnes/min",
					"Material": "6mm Corten Steel",
					"Compressor Type": "Rotary Screw",
					"Axle Configuration": "3 Axles + Lifting Axle",
					"Suspension": "Air Suspension",
					"Overall Length": "13.2m",
					"Tare Weight": "11.5-13.2 tonnes"
				},
				features: [
					"Integrated diesel compressor",
					"Sound-proofed engine compartment",
					"Hydraulic lifting axle",
					"Material level sensors",
					"Remote pressure monitoring",
					"Automatic safety shutdown"
				]
			},
			th: {
				name: "ถังบรรจุจำนวนมากแบบขับเคลื่อนด้วยตัวเอง (32/36 ลบ.ม.)",
				series: "การขนส่งจำนวนมาก",
				description: "รถบรรทุกแบบนิวแมติกที่ขับเคลื่อนด้วยเครื่องยนต์สำหรับการทำงานอิสระ",
				detailedDescription: "<p>โซลูชันการขนส่งจำนวนมากแบบครบวงจรพร้อมระบบคอมเพรสเซอร์อากาศที่ขับเคลื่อนด้วยดีเซล เครื่องยนต์เฉพาะ 150-200 แรงม้าขับเคลื่อนคอมเพรสเซอร์แบบสกรูหมุนที่ให้การไหลของอากาศ 12-18 ลบ.ม./นาที ที่ความดัน 3.5 บาร์ ช่วยให้สามารถขนถ่ายได้โดยไม่ต้องใช้แหล่งพลังงานภายนอก</p><p>เหมาะสำหรับสถานที่ก่อสร้างระยะไกลและการทำเหมืองแร่ ช่องเครื่องยนต์กันเสียงช่วยลดมลพิษทางเสียง ในขณะที่ระบบเพลายกแบบไฮดรอลิกช่วยเพิ่มประสิทธิภาพการกระจายน้ำหนักเมื่อบรรทุกหรือว่างเปล่า รวมถึงการตรวจสอบความดันในถังระยะไกลและเซ็นเซอร์ระดับวัสดุ</p>",
				specifications: {
					"ตัวเลือกความจุ": "32, 36 ลบ.ม.",
					"กำลังเครื่องยนต์": "ดีเซล 150-200 แรงม้า",
					"การจ่ายอากาศ": "12-18 ลบ.ม./นาที @ 3.5 บาร์",
					"อัตราการขนถ่าย": "1.8-2.4 ตัน/นาที",
					"วัสดุ": "เหล็ก Corten 6 มม.",
					"ประเภทคอมเพรสเซอร์": "สกรูหมุน",
					"การกำหนดค่าเพลา": "3 เพลา + เพลายก",
					"ระบบกันสะเทือน": "ระบบกันสะเทือนลม",
					"ความยาวโดยรวม": "13.2 เมตร",
					"น้ำหนักรถเปล่า": "11.5-13.2 ตัน"
				},
				features: [
					"คอมเพรสเซอร์ดีเซลแบบบูรณาการ",
					"ช่องเครื่องยนต์กันเสียง",
					"เพลายกแบบไฮดรอลิก",
					"เซ็นเซอร์ระดับวัสดุ",
					"ตรวจสอบความดันระยะไกล",
					"ปิดอัตโนมัติเพื่อความปลอดภัย"
				]
			}
		},
		images: [
			"./product/bulk_tank._engine1.jpg",
			"./product/bulk_tank1._engine.jpg",
			"./product/bulk_tank._engine.jpg"
		],
		related: [21, 23]
	},

	24: {
		id: 24,
		brochureUrl: {
			en: "./img/brochure.pdf",
			th: "./img/brochure.pdf"
		},
		translations: {
			en: {
				name: "Liquid Tanker Semi-trailer Aluminium (45,50 KL)",
				series: "Tanker Series",
				description: "Lightweight aluminum tankers for fuel and oil transport with maximum payload capacity.",
				detailedDescription: "<p>Our aluminum liquid tankers feature a weight-optimized construction with 6mm aluminum body to maximize payload capacity while ensuring corrosion resistance. Designed for long-haul fuel distribution with modular compartments and advanced safety features.</p><p>The tri-axle configuration provides stability during transport, while the high-tensile steel frame ensures durability. Optional heating coils and insulation packages make these tankers suitable for various liquid transport applications.</p>",
				specifications: {
					"Payload Capacity": "45,000–50,000 liters",
					"Volume Options": "45KL, 50KL",
					"Tank Material": "Aluminum (6mm body/ends)",
					"Axle Configuration": "3 axles, 12 tires",
					"Suspension": "Steel mechanical or air suspension",
					"Braking System": "ABS standard",
					"Dimensions (L×W×H)": "12.5m × 2.5m × 3.8m",
					"Tare Weight": "~9,000 kg"
				},
				features: [
					"Modular compartments (2+)",
					"500mm manholes with ball valves",
					"Dual fire extinguishers",
					"Anti-static system",
					"LED lighting system",
					"ADR-compliant for hazardous liquids"
				]
			},
			th: {
				name: "รถพ่วงบรรทุกน้ำมันอะลูมิเนียม (45,50 KL)",
				series: "ซีรีส์แท็งก์น้ำมัน",
				description: "รถถังอะลูมิเนียมน้ำหนักเบาสำหรับการขนส่งน้ำมันเชื้อเพลิงและน้ำมันด้วยความจุบรรทุกสูงสุด",
				detailedDescription: "<p>รถถังบรรทุกของเหลวอะลูมิเนียมของเรามีโครงสร้างที่ปรับให้เหมาะสมกับน้ำหนักด้วยตัวถังอะลูมิเนียม 6 มม. เพื่อเพิ่มความจุในการบรรทุกสูงสุดในขณะที่ป้องกันการกัดกร่อน ออกแบบมาสำหรับการกระจายน้ำมันเชื้อเพลิงระยะไกลด้วยช่องบรรจุแบบแยกส่วนและคุณสมบัติความปลอดภัยขั้นสูง</p><p>การกำหนดค่าสามเพลามีความมั่นคงระหว่างการขนส่ง ในขณะที่โครงเหล็กความต้านทานสูงช่วยให้ทนทาน ขดลวดความร้อนและชุดฉนวนเสริมทำให้รถถังเหล่านี้เหมาะสำหรับการขนส่งของเหลวหลายประเภท</p>",
				specifications: {
					"ความจุในการบรรทุก": "45,000–50,000 ลิตร",
					"ตัวเลือกปริมาตร": "45KL, 50KL",
					"วัสดุถัง": "อะลูมิเนียม (ตัวถัง/ปลาย 6 มม.)",
					"การกำหนดค่าชุดเพลา": "3 เพลา, 12 ยาง",
					"ระบบกันสะเทือน": "ระบบกันสะเทือนกลหรือระบบลม",
					"ระบบเบรก": "ABS มาตรฐาน",
					"ขนาด (ยาว×กว้าง×สูง)": "12.5 ม. × 2.5 ม. × 3.8 ม.",
					"น้ำหนักเปล่า": "~9,000 กก."
				},
				features: [
					"ช่องบรรจุแบบแยกส่วน (2+)",
					"ช่องเปิด 500 มม. พร้อมวาล์วลูกบอล",
					"เครื่องดับเพลิงคู่",
					"ระบบป้องกันไฟฟ้าสถิต",
					"ระบบไฟ LED",
					"เป็นไปตามมาตรฐาน ADR สำหรับของเหลวอันตราย"
				]
			}
		},
		images: [
			"./product/liquid_tanker1.jpg",
			"./product/liquid_tanker2.jpg",
			"./product/liquid_tanker3.jpg"
		],
		related: [ 25]
	},

	25: {
		id: 25,
		brochureUrl: {
			en: "./img/brochure.pdf",
			th: "./img/brochure.pdf"
		},
		translations: {
			en: {
				name: "Fuel Rigid Tanker",
				series: "Tanker Series",
				description: "Integrated fuel delivery solution with telematics for efficient dispensing.",
				detailedDescription: "<p>Complete rigid-frame fuel tankers built on premium chassis with integrated SafeCon® III control systems for efficient dispensing and real-time inventory tracking. Features aluminum construction for optimal weight-to-capacity ratio and corrosion resistance.</p><p>Designed for both urban delivery and demanding mining operations, these tankers include advanced safety features like collision guards and grounding systems. Optional arctic packages provide reliable operation in extreme temperatures.</p>",
				specifications: {
					"Payload Capacity": "20,000 liters (3-axle)",
					"Chassis Options": "Scania, Volvo, Mercedes",
					"Tank Material": "Aluminum",
					"Control System": "SafeCon® III with telematics",
					"Dimensions (L×W×H)": "8.5m × 2.55m × 3.4m",
					"Net Weight": "11,880 kg",
					"Temperature Range": "-20°C to +50°C",
					"Discharge Rate": "800-1200 L/min"
				},
				features: [
					"20% higher volume vs. steel tanks",
					"Tanks transferable to new chassis",
					"ADR-approved for LGBF fuels",
					"Collision protection guards",
					"Mining configurations available",
					"Arctic packages for extreme cold"
				]
			},
			th: {
				name: "รถถังเชื้อเพลิงแบบแข็ง",
				series: "ซีรีส์แท็งก์น้ำมัน",
				description: "โซลูชันการจ่ายน้ำมันเชื้อเพลิงแบบบูรณาการพร้อมระบบ telematics สำหรับการจ่ายที่มีประสิทธิภาพ",
				detailedDescription: "<p>รถถังเชื้อเพลิงแบบแข็งที่สมบูรณ์สร้างขึ้นบนแชสซีระดับพรีเมียมด้วยระบบควบคุม SafeCon® III ที่รวมเข้าด้วยกันสำหรับการจ่ายที่มีประสิทธิภาพและการติดตามสินค้าคงคลังแบบเรียลไทม์ มีโครงสร้างอะลูมิเนียมสำหรับอัตราส่วนน้ำหนักต่อความจุที่เหมาะสมและการป้องกันการกัดกร่อน</p><p>ออกแบบมาสำหรับการส่งมอบในเมืองและการดำเนินงานเหมืองแร่ที่ต้องการ รถถังเหล่านี้รวมคุณสมบัติความปลอดภัยขั้นสูงเช่นกันชนป้องกันการชนและระบบกราวนด์ ชุดอาร์กติกเสริมช่วยให้การทำงานที่เชื่อถือได้ในอุณหภูมิที่รุนแรง</p>",
				specifications: {
					"ความจุในการบรรทุก": "20,000 ลิตร (3 เพลา)",
					"ตัวเลือกแชสซี": "Scania, Volvo, Mercedes",
					"วัสดุถัง": "อะลูมิเนียม",
					"ระบบควบคุม": "SafeCon® III พร้อม telematics",
					"ขนาด (ยาว×กว้าง×สูง)": "8.5 ม. × 2.55 ม. × 3.4 ม.",
					"น้ำหนักสุทธิ": "11,880 กก.",
					"ช่วงอุณหภูมิ": "-20°C ถึง +50°C",
					"อัตราการปล่อย": "800-1200 ลิตร/นาที"
				},
				features: [
					"ปริมาณสูงกว่าเหล็ก 20%",
					"ถังสามารถย้ายไปยังแชสซีใหม่ได้",
					"ได้รับการรับรอง ADR สำหรับเชื้อเพลิง LGBF",
					"กันชนป้องกันการชน",
					"การกำหนดค่าเหมืองแร่พร้อมใช้งาน",
					"ชุดอาร์กติกสำหรับความเย็นจัด"
				]
			}
		},
		images: [
			"./product/fuel_regid.jpg",
			"./product/fuel_regid1.jpg"
		],
		related: [24, 26]
	},

	26: {
		id: 26,
		brochureUrl: {
			en: "./img/brochure.pdf",
			th: "./img/brochure.pdf"
		},
		translations: {
			en: {
				name: "Bitumen Tanker Semi-trailer",
				series: "Tanker Series",
				description: "Heated tankers for high-temperature asphalt transport with superior insulation.",
				detailedDescription: "<p>Specialized bitumen tankers featuring thermal insulation (80-120mm glass wool) and U-shaped burner systems for maintaining high temperatures during transport. Designed for viscous asphalt and bitumen, these tankers retain heat efficiently with less than 3°C/hour heat loss.</p><p>The reinforced crossmembers provide off-road durability, while the elliptical tank design ensures structural integrity. Available with 1-7 compartments to suit different operational requirements.</p>",
				specifications: {
					"Payload Capacity": "45,000–48,000 liters",
					"Tank Material": "Q235B carbon steel (5–6mm)",
					"Heating System": "8-inch U-tubes + diesel burner",
					"Insulation": "80–120mm compressed glass fiber",
					"Axles": "3 × FUWA 13T axles",
					"Discharge": "6-inch butterfly valves",
					"Temperature Retention": "<3°C/hour heat loss",
					"Max Operating Temp": "200°C"
				},
				features: [
					"Beckett burner system",
					"Anti-skid walkways",
					"DN500mm manholes",
					"Reinforced crossmembers",
					"Custom compartments (1-7)",
					"ECE, GCC, DOT certified"
				]
			},
			th: {
				name: "รถพ่วงบรรทุกน้ำมันดิน",
				series: "ซีรีส์แท็งก์น้ำมัน",
				description: "รถถังความร้อนสำหรับการขนส่งยางมะตอยอุณหภูมิสูงด้วยฉนวนกันความร้อนที่เหนือกว่า",
				detailedDescription: "<p>รถถังน้ำมันดินเฉพาะทางที่มีฉนวนกันความร้อน (ใยแก้ว 80-120 มม.) และระบบเบิร์นเนอร์รูปตัว U สำหรับรักษาอุณหภูมิสูงระหว่างการขนส่ง ออกแบบมาสำหรับยางมะตอยและน้ำมันดินหนืด รถถังเหล่านี้เก็บความร้อนได้อย่างมีประสิทธิภาพด้วยการสูญเสียความร้อนน้อยกว่า 3°C/ชั่วโมง</p><p>คานขวางเสริมแรงให้ความทนทานสำหรับการใช้งานนอกถนน ในขณะที่การออกแบบถังรูปไข่ช่วยรับประกันความสมบูรณ์ของโครงสร้าง มีให้เลือก 1-7 ช่องเพื่อให้เหมาะกับความต้องการการใช้งานที่แตกต่างกัน</p>",
				specifications: {
					"ความจุในการบรรทุก": "45,000–48,000 ลิตร",
					"วัสดุถัง": "เหล็กคาร์บอน Q235B (5–6 มม.)",
					"ระบบทำความร้อน": "ท่อรูปตัว U 8 นิ้ว + เบิร์นเนอร์ดีเซล",
					"ฉนวนกันความร้อน": "ใยแก้วอัด 80–120 มม.",
					"เพลา": "3 × เพลา FUWA 13 ตัน",
					"การปล่อย": "วาล์วผีเสื้อ 6 นิ้ว",
					"การรักษาอุณหภูมิ": "การสูญเสียความร้อน <3°C/ชั่วโมง",
					"อุณหภูมิการทำงานสูงสุด": "200°C"
				},
				features: [
					"ระบบเบิร์นเนอร์ Beckett",
					"ทางเดินกันลื่น",
					"ฝาเปิด DN500 มม.",
					"คานขวางเสริมแรง",
					"ช่องบรรจุแบบกำหนดเอง (1-7)",
					"ได้รับการรับรอง ECE, GCC, DOT"
				]
			}
		},
		images: [
			"./product/bitumen_tanker1.jpg"
		],
		related: [24, 25]
	},

	27: {
		id: 27,
		brochureUrl: {
			en: "./img/brochure.pdf",
			th: "./img/brochure.pdf"
		},
		translations: {
			en: {
				name: "Tipping Tanker",
				series: "Tanker Series",
				description: "Hydraulic tipping system for containerized liquid and sludge unloading.",
				detailedDescription: "<p>Innovative tipping chassis designed for 20-foot containers, enabling 45° angle unloading of bulk liquids and sludges. Features a powerful 4-stage hydraulic RAM system that provides smooth and controlled lifting operations.</p><p>Compatible with standard ISO containers, this system can be powered by either PTO or dedicated diesel power units. Ideal for waste management, industrial byproducts, and aggregate transport applications where containerized solutions are preferred.</p>",
				specifications: {
					"Tipping Capacity": "50 tons",
					"Power Options": "Diesel engine or PTO drive",
					"Tip Angle": "45°",
					"Lifting Mechanism": "4-stage hydraulic RAM",
					"Frame Material": "High-strength steel",
					"Compatibility": "20-foot containers",
					"Cycle Time": "5-minute discharge",
					"Max Container Weight": "30,480 kg"
				},
				features: [
					"ISO container twist locks",
					"Modular mounting system",
					"Self-contained hydraulics",
					"Low maintenance design",
					"Safety locking mechanisms",
					"Waste sludge compatible"
				]
			},
			th: {
				name: "รถถังเทข้าง",
				series: "ซีรีส์แท็งก์น้ำมัน",
				description: "ระบบเทไฮดรอลิกสำหรับการขนถ่ายของเหลวและโคลนในตู้คอนเทนเนอร์",
				detailedDescription: "<p>แชสซีเทข้างที่ออกแบบมาสำหรับตู้คอนเทนเนอร์ขนาด 20 ฟุต ช่วยให้สามารถขนถ่ายของเหลวและโคลนจำนวนมากในมุม 45° มีระบบไฮดรอลิก RAM 4 ขั้นตอนที่ทรงพลังซึ่งให้การยกที่ราบรื่นและควบคุมได้</p><p>เข้ากันได้กับตู้คอนเทนเนอร์ ISO มาตรฐาน ระบบนี้สามารถใช้พลังงานจาก PTO หรือหน่วยพลังงานดีเซลเฉพาะ เหมาะสำหรับการจัดการของเสีย ผลพลอยได้จากอุตสาหกรรม และการขนส่งวัสดุที่ต้องการโซลูชันแบบตู้คอนเทนเนอร์</p>",
				specifications: {
					"ความจุในการเท": "50 ตัน",
					"ตัวเลือกพลังงาน": "เครื่องยนต์ดีเซลหรือ PTO",
					"มุมเท": "45°",
					"กลไกการยก": "ไฮดรอลิก RAM 4 ขั้นตอน",
					"วัสดุโครงสร้าง": "เหล็กความแข็งแรงสูง",
					"ความเข้ากันได้": "ตู้คอนเทนเนอร์ 20 ฟุต",
					"เวลารอบการทำงาน": "ขนถ่าย 5 นาที",
					"น้ำหนักตู้คอนเทนเนอร์สูงสุด": "30,480 กก."
				},
				features: [
					"ล็อคบิดตู้คอนเทนเนอร์ ISO",
					"ระบบติดตั้งแบบแยกส่วน",
					"ไฮดรอลิกแบบครบวงจร",
					"การออกแบบบำรุงรักษาต่ำ",
					"กลไกล็อคความปลอดภัย",
					"เข้ากันได้กับโคลนของเสีย"
				]
			}
		},
		images: [
			"./product/tipping_tanker.jpg"
		],
		related: [24]
	}	
};
