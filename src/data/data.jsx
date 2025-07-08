// images
import laser from "../assets/images/laser.png"
import laser_small from "../assets/images/laser_small.png"

import skin from "../assets/images/skin.png"
import skin_small from "../assets/images/skin_small.png"

import hair from "../assets/images/hair.png"
import hair_small from "../assets/images/hair_small.png"

import cosmetics from "../assets/images/cosmetics.png"
import cosmetics_small from "../assets/images/cosmetics_small.png"

import beauty from "../assets/images/beauty.png"
import beauty_small from "../assets/images/beauty_small.png"

import slimming from "../assets/images/slimming.png"
import slimming_small from "../assets/images/slimming_small.png"

export const menu = [{
        name : "Home",
        link : "/",
        children : []
    },{
        name : "Slimming",
        link : "/",
        children : [{
            subCategory : "Weight Loss",
            services : [{
                name : "Guaranteed weight loss",
                link : "/guaranteed-weight-loss",
                img : slimming,
                img_small : slimming_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Struggling with weight loss has become a major problem. Busy lifestyles, poor eating habits, hormonal imbalances, and inactive routines make it difficult to get rid of unwanted fat. Excess weight isn't just about appearance. It increases the risk of ",
                    options : ["Heart disease","Diabetes","Joint issues","Low self-esteem"],
                    desc_2 : "At our clinic, we understand how hard and personal this journey can be. That’s why we offer a medically-guided, customized solution that ensures safe, sustainable, and guaranteed weight loss."
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Our Guaranteed Weight Loss Program combines cutting-edge technology, expert medical supervision, and personalized care to help you achieve your body goals, safely and effectively. With effective treatments and evidence-based methods, we target fat loss, boost metabolism, and support overall wellness. You’re not just losing weight, you’re gaining confidence, energy, and a healthier lifestyle.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "Our program typically includes:",
                    options : [
                        "Medical Consultation & Lifestyle Assessment - One-on-one sessions to uncover the root causes of weight gain.",
                        "Customized Diet & Nutrition Plans - Easy-to-follow plans made by licensed nutritionists.",
                        "Non-Surgical Fat Reduction Treatments - Including advanced technologies like Cryolipolysis (Fat Freezing), Ultrasound Cavitation, and RF Body Contouring.",
                        "Metabolism Boosting Therapies - Techniques to stimulate natural fat-burning and improve energy levels.",
                        "Progress Tracking & Weekly Reviews - Stay motivated with regular check-ins and visible results."

                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "How fast will I see results ?",
                        answer : "Visible changes typically begin within 2 - 4 weeks."
                    },{
                        question : "Are the treatments painful or invasive ?",
                        answer : "No. Our technologies are non-surgical and pain-free."
                    },{
                        question : "Will I gain the weight back after the program ?",
                        answer : "Our goal is long-term success. Even after concluding the program, we provide ongoing support needed to maintain your results."
                    }]
                }
            },{
                name : "Body firming",
                link : "/body-firming",
                img : slimming,
                img_small : slimming_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : `Sagging skin has become a common concern, especially after weight loss, pregnancy, or due to aging.
                                As we grow older, the production of collagen and elastin decreases, leading to loose skin. While topical creams and exercise can support skin health, they cannot rejuvinate the skin’s natural elasticity. 
                                In such cases, targeted body firming treatments offer a more effective and results-driven solution.
                                `,
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Our Body Firming Program uses advanced, non-invasive technologies to tighten and lift your skin, restoring a smoother and more youthful contour. By stimulating collagen production and boosting skin elasticity, we help you reclaim a toned, sculpted appearance, without surgery or downtime.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : ["Radiofrequency (RF) Skin Tightening - Stimulates collagen to naturally firm and lift skin.",
                                "Infrared and LED Therapy - Boosts skin regeneration and improves tone and texture.",
                                "Customized Skin-Firming Serums & Topicals - Enhances results when used with in-clinic treatments.",
                                "Treatment Areas: Abdomen, thighs, buttocks, arms, décolletage, and more.",
                                "Progress Monitoring - Regular assessments to ensure visible improvements."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is body firming safe for all skin types ?",
                        answer : "Yes, our non-invasive treatments are suitable for all skin tones and types."
                    },{
                        question : "How many sessions will I need ?",
                        answer : "Most clients see noticeable results after 4–6 sessions, but this depends on the severity of skin laxity."
                    },{
                        question : "Is there any downtime ?",
                        answer : "No. Treatments are gentle and allow you to resume your daily routine immediately."
                    }]
                }
            },{
                name : "Body tonning",
                link : "/body-tonning",
                img : slimming,
                img_small : slimming_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 :   `Even with consistent workouts, stubborn areas like the belly, thighs, and arms can remain untoned. Factors like age, muscle loss, and poor circulation contribute to a lack of muscle definition and firmness.
                                Body toning helps enhance muscle tone, improve circulation, and smoothen body contours when exercise alone isn’t enough.
                                `,
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : `Our Body Toning Program combines muscle stimulation technology with therapies to firm up your physique and define your natural shape. It’s ideal for anyone looking to enhance muscle tone, improve posture, and create a lean, sculpted look, without hitting the gym every day.`,
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "EMS (Electrical Muscle Stimulation) - Contracts muscles deeply to tone and strengthen targeted areas.",
                        "Lymphatic Drainage Massage - Reduces bloating and improves muscle recovery and circulation.",
                        "Localized Fat Reduction Therapies - Helps define muscles by reducing surrounding fat.",
                        "Customized Toning Sessions - Tailored to your fitness level and aesthetic goals."
                    ]
                },
                section_4 :  {
                    title : "FAQs",
                    section  : [{
                        question : "Is this a substitute for exercise ?",
                        answer : "While it enhances muscle tone, it's best paired with a healthy lifestyle for long-lasting results."
                    },{
                        question : "Will I feel sore afterward ?",
                        answer : "Some clients feel a slight soreness, similar to a mild workout."
                    },{
                        question : "How often should I come for sessions ?",
                        answer : "1–2 sessions a week are ideal for optimal toning and maintenance."
                    }]
                }
            },{
                name : "Body composition analysis",
                link : "/body-composition-analysis",
                img : slimming,
                img_small : slimming_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : `Weight or BMI should not be solely relied on to judge one’s health, as these numbers don’t tell the full story. Two people with the same weight can have very different levels of fat, muscle, and water. Understanding your body composition is key to creating an effective weight loss, fitness, or body contouring plan.`,
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Our Body Composition Analysis provides a complete look at your physical makeup using advanced scanning tools. It measures fat mass, lean muscle, water content, and visceral fat, giving us the data needed to personalize your wellness and aesthetic treatments.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [ 
                        "In-Depth Body Scanning - Measures fat, muscle, water, and bone density.",
                        "Visceral Fat Assessment - Helps evaluate internal fat linked to health risks.",
                        "Muscle Balance & Distribution - Identifies weak or underdeveloped areas to focus on.",
                        "Progress Tracking - Regular reports to monitor improvements during your treatment journey.",
                        "Customized Recommendations - Based on real metrics—not guesswork."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is this like a regular weighing scale ?",
                        answer : "No, this is a far more detailed analysis that breaks down your body composition into measurable data."
                    },{
                        question : "How long does the scan take  ?",
                        answer : "Just a few minutes. Results are instant and explained by our specialists."
                    },{
                        question : "How often should I get a body composition analysis ?",
                        answer : "We recommend one at the start of your program and every 4–6 weeks to track progress."
                    }]
                }
            }]
        },{
            subCategory : "Inch Loss",
            services : [{
                name : "Cryolypolysis",
                link : "/cryolypolysis",
                img : slimming,
                img_small : slimming_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Stubborn fat pockets often remain despite a healthy diet and regular exercise. These areas, such as the lower belly, love handles, and thighs, can be resistant to traditional fat-loss methods. When lifestyle changes fall short, a non-surgical alternative is needed to precisely target and eliminate fat cells without damaging surrounding tissue.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Cryolipolysis, commonly known as Fat Freezing, is a clinically proven treatment that uses controlled cooling to freeze and permanently destroy fat cells. It’s FDA-cleared, non-invasive, and ideal for clients looking for visible fat reduction without surgery, needles, or downtime.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Targeted Fat Cell Elimination - Precise treatment of stubborn fat areas with advanced cooling applicators.",
                        "No Damage to Skin or Tissue - Only fat cells are affected, leaving skin and surrounding tissue unharmed.",
                        "Common Treatment Areas: Abdomen, flanks, thighs, arms, back, and under the chin."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is Cryolipolysis safe ?",
                        answer : "Yes, it’s a safe and FDA-cleared procedure with minimal side effects like temporary numbness or redness."
                    },{
                        question : "How long until I see results ?",
                        answer : "Noticeable fat reduction typically occurs within 4-6 weeks, with full results in about 12 weeks."
                    },{
                        question : "Are the results permanent ?",
                        answer : "Yes. Once fat cells are destroyed, they do not regenerate. A stable weight helps maintain results."
                    }]
                }
            },{
                name : "Wrap treatments",
                link : "/wrap-treatments",
                img : slimming,
                img_small : slimming_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Fluid retention, sluggish circulation, and toxins can contribute to bloating, cellulite, and skin dullness, making it difficult to achieve a smooth, sculpted silhouette.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Wrap treatments combine detoxifying ingredients with thermal activation to stimulate circulation, reduce water retention, and tighten the skin. Often used alongside other treatments, wraps enhance body contouring results and leave the skin feeling refreshed and firm.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Detoxifying Clay or Herbal Wraps - Pulls out impurities and improves skin tone.",
                        "Slimming & Inch Loss Wraps - Promote temporary inch loss and firming.",
                        "Hydrating Wraps - Rejuvenate dry or uneven skin post-fat loss."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "How long do the results last ?",
                        answer : "Water loss is temporary, but detox and skin-firming effects can last longer with regular treatments."
                    },{
                        question : "Can I combine this with other procedures ?",
                        answer : "Absolutely. Wraps are an excellent complement to fat reduction or toning sessions."
                    }]
                }
            },{
                name : "Specific area therapy",
                link : "/specific-area-therapy ",
                img : slimming,
                img_small : slimming_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Some of the body areas are more prone to fat accumulation or skin laxity, and one-size-fits-all treatments often don’t deliver targeted results.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Specific Area Therapy is a customized approach that focuses treatments on high-concern zones such as the arms, inner thighs, lower abdomen, or flanks. By concentrating technology and care where it’s needed most, clients experience faster and more defined improvements.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Precision Fat Reduction or Toning - Targeted application using RF, EMS, or cryo tech.",
                        "Spot Treatments for Skin Tightening - Custom solutions for small, stubborn areas.",
                        "Post-Treatment Recovery Focus - Includes lymphatic drainage or muscle reactivation for balance."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Can I treat multiple areas in one session ?",
                        answer : "Yes, depending on the treatment plan and device used."
                    },{
                        question : "Is this effective for post-pregnancy concerns ?",
                        answer : "Absolutely. Many clients use this therapy to target post-baby belly or hip areas."
                    }]
                }
            },{
                name : "Slimtron",
                link : "/slimtron",
                img : slimming,
                img_small : slimming_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Many individuals want to shape their body without undergoing surgery or spending hours in the gym, but not all fat reduction methods offer muscle toning benefits.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Slimtron combines ultrasound lipolysis and muscle stimulation to reduce fat and enhance muscle tone in one treatment. It’s non-invasive and suitable for clients looking to slim down and improve body contour simultaneously.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Low-Frequency Ultrasound Lipolysis - Breaks down localized fat deposits safely.",
                        "Electrical Muscle Stimulation (EMS) - Tones and strengthens underlying muscles.",
                        "Ideal for Midsection, Arms, and Legs - Visibly slims and firms problem areas."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "How long is each session?",
                        answer : "Typically 30–45 minutes, depending on the area treated."
                    },{
                        question : "Is there any discomfort?",
                        answer : "The procedure is pain-free. You’ll feel mild warmth and muscle contractions"
                    }]
                }
            },{
                name : "EM sculpt",
                link : "/EM-sculpt",
                img : slimming,
                img_small : slimming_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Achieving visible muscle tone and fat reduction requires consistent workouts and targeted effort, which isn't always feasible for everyone due to time or physical limitations.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "EM Sculpt uses high-intensity focused electromagnetic (HIFEM) energy to cause thousands of deep muscle contractions in a single session. These contractions build muscle mass and burn fat, making it ideal for sculpting abs, buttocks, arms, and thighs.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Non-Invasive Muscle Toning - Equivalent to 20,000 crunches or squats in one session.",
                        "Fat Reduction + Muscle Building - Dual action for a leaner, firmer body.",
                        "No Downtime or Recovery Needed."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Who is EM Sculpt suitable for ?",
                        answer : "It’s ideal for those near their target weight who want more definition and muscle tone."
                    },{
                        question : "How soon can I see results ?",
                        answer : "Muscle firmness may be felt immediately; visible results typically appear after 2–4 sessions."
                    }]
                }
            },{
                name : "Electrode placements",
                link : "/electrode-placements",
                img : slimming,
                img_small : slimming_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "When muscles become weak or underused, especially after weight loss or inactivity, rebuilding tone can be difficult through traditional exercise alone.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "This therapy uses Electrical Muscle Stimulation (EMS) via carefully placed electrodes to mimic the natural contraction of muscles. It enhances tone, improves circulation, and supports body sculpting and rehabilitation.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Targeted Muscle Activation - Stimulates even deep muscle fibers safely.",
                        "Custom Electrode Mapping - Based on your body goals and weak areas.",
                        "Used for Shaping, Recovery & Rehab."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is EMS safe ?",
                        answer : "Yes, EMS has been used for decades in physical therapy and sports training. It’s non-invasive and safe under professional guidance."
                    },{
                        question : "Does it replace exercise ?",
                        answer : "EMS complements an active lifestyle, enhancing muscle tone and recovery when combined with movement or used alone."
                    }]
                }
            },{ 
                name : "Bipolar",
                link : "/bipolar",
                img : slimming,
                img_small : slimming_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        ""
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "",
                        answer : ""
                    },{
                        question : "",
                        answer : ""
                    },{
                        question : "",
                        answer : ""
                    }]
                }
            }]
        },{
            subCategory : "Bust Line Treatment",
            services : [{
                name : "Bust Enhancement",
                link : "/bust-enhancement",
                img : slimming,
                img_small : slimming_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Some individuals may feel self-conscious about a smaller or less defined bust line, whether due to genetics, weight loss, aging, or hormonal changes. Lack of volume or shape in the bust can also affect posture and body proportions.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Our Bust Enhancement Treatment uses advanced, non-surgical technologies to stimulate tissue volume and improve the natural shape of the breasts. The process is completely safe, painless, and helps create a fuller, more youthful appearance, without implants or downtime.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Vacuum Suction Therapy - Promotes blood flow and tissue expansion for natural volume.",
                        "Microcurrent Stimulation - Tones chest muscles, enhancing lift and contour.",
                        "Topical Serums & Herbal Enhancers - Enrich the skin and support firmness and hydration.",
                        "Hormone-Free & Non-Invasive."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is this treatment safe ?",
                        answer : "Yes, all procedures are non-invasive and performed by trained specialists."
                    },{
                        question : "How many sessions are needed ?",
                        answer : "A minimum of 6–8 sessions is recommended for visible enhancement, depending on body type."
                    },{
                        question : "Will the results look natural ?",
                        answer : "Absolutely. The goal is to enhance your natural bust line with subtle, balanced improvement."
                    }]
                }
            },{
                name : "Bust Reduction",
                link : "/bust-reduction",
                img : slimming,
                img_small : slimming_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Excess bust size can cause back and neck pain, posture problems, and discomfort during physical activity. It can also lead to self-esteem issues and difficulty finding well-fitting clothes.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Our Bust Reduction Treatment offers a non-surgical way to reduce excess fat and tissue in the bust area. Through fat-dissolving techniques and skin tightening, we help clients achieve a lighter, more lifted look—without surgery or scarring.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Ultrasound Cavitation - Breaks down fat deposits in the bust area.",
                        "Lymphatic Drainage Therapy - Encourages fluid removal and contouring.",
                        "RF Tightening - Firms the skin after volume reduction.",
                        "Custom Bust Contour Plan."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is bust reduction painful ?",
                        answer : "No. Treatments are gentle, non-invasive, and typically relaxing."
                    },{
                        question : "Are the results permanent ?",
                        answer : "With a healthy lifestyle, fat reduction results can be long-lasting."
                    },{
                        question : "Will it affect skin texture ?",
                        answer : "Not at all. In fact, we include skin-tightening to ensure a smooth, firm finish."
                    }]
                }
            },{
                name : "Bust Firming",
                link : "/bust-firming",
                img : slimming,
                img_small : slimming_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "With age, gravity, and hormonal changes, the skin and ligaments supporting the bust naturally lose elasticity, resulting in sagging, loss of shape, and wrinkles.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Bust Firming Treatments focus on lifting and toning the bust area using advanced technology that stimulates collagen and tightens the supporting skin tissue. This helps restore a firmer, perkier silhouette and youthful appearance.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Radiofrequency (RF) Skin Tightening - Stimulates collagen for long-term firmness.",
                        "Microcurrent Chest Muscle Stimulation - Improves lift and tone by activating pectoral muscles.",
                        "Hydrating & Lifting Serums - Improve skin texture and elasticity.",
                        "Recommended for Postpartum or Aging Skin."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "How soon will I see results ?",
                        answer : "Many clients notice an improvement in firmness after just a few sessions. Best results are seen after 6–8 treatments."
                    },{
                        question : "Is there any downtime ?",
                        answer : "No, all procedures are non-invasive with zero recovery time."
                    },{
                        question : "Is this suitable after pregnancy or breastfeeding ?",
                        answer : "Yes, it’s a popular postnatal treatment that helps restore firmness naturally."
                    }]
                }
            },]
        },{
            subCategory : "Ayurvedic treatments ",
            services : [{
                name : "udwarthanam",
                link : "/udwarthanam",
                img : slimming,
                img_small : slimming_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Excess body fat, sluggish metabolism, cellulite, and toxin accumulation can lead to heaviness, poor skin texture, and water retention—issues often not fully addressed by modern treatments.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Udwarthanam is a traditional Ayurvedic dry massage using medicated herbal powders. It is known for breaking down fat deposits, improving lymphatic flow, and exfoliating dead skin cells. The treatment is vigorous and energizing—ideal for detox and slimming goals.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Fat-Burning & Cellulite Reduction - Helps break down stubborn fat and improve skin tone.",
                        "Lymphatic Detox - Promotes elimination of toxins through improved circulation.",
                        "Skin Exfoliation - Brightens and softens skin naturally.",
                        "Balances Kapha Dosha."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is Udwarthanam good for weight loss ?",
                        answer : "Yes, it supports inch loss and fat reduction when done consistently."
                    },{
                        question : "How often should I take it ?",
                        answer : "2–3 sessions per week are ideal during a weight-loss program."
                    }]
                }
            },{
                name : "Potli Massages",
                link : "/potli-massages",
                img : slimming,
                img_small : slimming_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Joint stiffness, chronic body pain, muscle fatigue, and poor blood circulation are common issues, especially in stressful lifestyles or post-exercise recovery phases.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Potli Massage involves the use of warm herbal pouches (potlis) that are dipped in oils and used to massage the body. This traditional therapy soothes aching muscles, relieves inflammation, and rejuvenates the mind and body.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Pain & Inflammation Relief - Ideal for arthritis, backache, and muscle fatigue.",
                        "Herbal Heat Therapy - Enhances blood flow and nutrient delivery.",
                        "Customized Potli Herbs - Based on individual body conditions (Vata, Pitta, Kapha)."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is Potli massage suitable for all ages ?",
                        answer : "Yes, it’s safe and beneficial for adults of all ages experiencing pain or stiffness."
                    },{
                        question : "Does it help with post-workout soreness ?",
                        answer : "Absolutely. It speeds up muscle recovery and reduces fatigue."
                    }]
                }
            },{
                name : "Full body relaxation massages ",
                link : "/full-body-relaxation-massages",
                img : slimming,
                img_small : slimming_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Daily stress, poor sleep, and physical tension can negatively impact mental clarity, mood, and immune function, making regular relaxation essential to wellness.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "This is a gentle, full-body massage designed to relax the nervous system, relieve muscle tension, and improve circulation. Using long, flowing strokes and calming oils, the session is ideal for total mind-body rejuvenation.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Stress & Anxiety Relief - Promotes deep relaxation and calm.",
                        "Improved Sleep & Circulation - Supports natural healing and energy flow.",
                        "Custom Pressure & Oil Options - Tailored to each client’s comfort and skin type."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "How long is each session ?",
                        answer : "Typically 60 to 90 minutes."
                    },{
                        question : "Can I take this massage regularly ?",
                        answer : "Yes, weekly or bi-weekly sessions are great for ongoing stress management."
                    }]
                }
            },{
                name : "Shirodhara ",
                link : "/shirodhara ",
                img : slimming,
                img_small : slimming_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Mental fatigue, insomnia, anxiety, and nervous tension can significantly reduce quality of life and affect hormonal balance and brain function.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Shirodhara is a deeply meditative Ayurvedic therapy in which warm medicated oil is poured in a steady stream over the forehead (third eye area). It calms the nervous system, promotes emotional balance, and enhances clarity.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Mental & Emotional Detox - Reduces stress, anxiety, and mood swings.",
                        "Improved Sleep & Focus - Excellent for insomnia and mental clarity.",
                        "Balances Vata & Pitta Dosha"
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is Shirodhara messy or uncomfortable ?",
                        answer : "Not at all. It is soothing and many clients feel a sense of bliss or calm afterward."
                    },{
                        question : "Can it be combined with other treatments ?",
                        answer : "Yes, often paired with head massage or steam therapy for enhanced benefits."
                    }]
                }
            },{
                name : "Kati vasti",
                link : "/kati-vasti",
                img : slimming,
                img_small : slimming_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Lower back pain, stiffness, and spinal discomfort are increasingly common due to sedentary work, poor posture, or muscular imbalances.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Kati Vasti is a localized Ayurvedic treatment where warm medicated oil is pooled over the lower back within a dough ring. The therapy targets chronic pain, nourishes spinal tissues, and reduces inflammation.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Chronic Lower Back Pain Relief - Treats sciatica, lumbar strain, and stiffness.",
                        "Spinal Rejuvenation - Nourishes discs and relaxes deep tissues.",
                        "Customized Herbal Oils Based on Diagnosis."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "How many sessions are needed for relief ?",
                        answer : "Relief may be felt in the first session, but 5–7 sessions are recommended for long-term results."
                    },{
                        question : "Is this suitable for slipped disc or sciatica ?",
                        answer : "Yes, it’s particularly effective for such conditions when combined with rest and proper care."
                    }]
                }
            },{
                name : "Steam",
                link : "/steam",
                img : slimming,
                img_small : slimming_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Toxin accumulation, sluggish metabolism, and poor skin tone often result from limited circulation and sweat activity, especially in sedentary lifestyles.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Herbal steam therapy opens pores, improves circulation, and promotes deep detoxification. The body is enclosed in a steam chamber while the head remains cool, allowing safe sweating and the absorption of medicinal herbs.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Detox & Skin Purification - Flushes out toxins via induced sweating.",
                        "Weight Loss Support - Boosts metabolism and fat breakdown.",
                        "Prepares Body for Other Treatments."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is herbal steam different from a regular sauna ?",
                        answer : "Yes, it uses Ayurvedic herbs to offer therapeutic benefits beyond heat alone."
                    },{
                        question : "How often can I take it ?",
                        answer : "2–3 times weekly is safe, especially when combined with massage or slimming therapies."
                    }]
                }
            },{
                name : "Sauna",
                link : "/sauna",
                img : slimming,
                img_small : slimming_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Every day, exposure to environmental toxins, stress, and poor circulation can hinder the body’s natural detox processes, leaving you feeling sluggish or inflamed.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Our Sauna Therapy uses dry or infrared heat to promote full-body detoxification, muscle recovery, and stress relief. It’s ideal for improving blood flow, relaxing the mind, and cleansing the skin from within.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Deep Tissue Detox - Promotes sweating to eliminate heavy metals and toxins.",
                        "Muscle Relaxation & Recovery - Eases post-exercise soreness or chronic tension.",
                        "Infrared Sauna Options Available."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "How long should a session last ?",
                        answer : "Sessions typically last 15–30 minutes, depending on the individual’s comfort level."
                    },{
                        question : "Is sauna good before or after workouts ?",
                        answer : "It can be beneficial both before (to warm up muscles) and after (for recovery and relaxation)."
                    }]
                }
            }]
        }]
    },{
        name : "Laser",
        link : "/",
        children : [{
            subCategory : "Face",
            services : [{
                name : "Facial Hair Reduction",
                link : "/facial-hair-reduction",
                img : laser,
                img_small : laser_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Unwanted facial hair can affect self-confidence and create challenges with makeup application, skin texture, and personal grooming. Traditional methods like threading, waxing, or shaving can be time-consuming, cause irritation, and lead to ingrown hairs or pigmentation.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Our Facial Hair Reduction Treatments use advanced laser or IPL technology to target hair at the root, significantly reducing growth over time. The process is quick, precise, and suitable for all skin types, with long-lasting results and smoother skin.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Upper Lip Hair Removal - Gentle and precise treatment for a clean, smooth upper lip.",
                        "Beard Line Shaping (for Men & Women) - Defines jawline and neck area with clean edges, perfect for those seeking a groomed look.",
                        "Side Lock Reduction - Tames thick or patchy sideburns for a balanced facial frame.",
                        "Chin Hair Removal - Effectively treats coarse or hormonal chin hair for lasting smoothness.",
                        "Painless, Non-Invasive Technology - Suitable for sensitive facial areas."

                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is laser facial hair removal safe for all skin types ?",
                        answer : "Yes, our machines are calibrated for various skin tones and hair types."
                    },{
                        question : "How many sessions will I need ?",
                        answer : "Typically 6–8 sessions, spaced 3–4 weeks apart, followed by occasional maintenance."
                    },{
                        question : "Will it remove hair permanently ?",
                        answer : "It significantly reduces hair growth permanently. Some clients may require touch-ups based on hormonal factors."
                    }]
                }
            },{
                name : "Upper Lips",
                link : "/upper-lips",
                img : laser,
                img_small : laser_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Unwanted hair on the upper lip can affect confidence and facial aesthetics. Frequent waxing or threading often leads to skin irritation, redness, and ingrown hairs, especially on sensitive skin.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Our Upper Lip Laser Hair Reduction provides a precise and gentle solution for removing fine and coarse hair. The treatment is quick, safe, and ideal for all skin types, leaving you with a clean, smooth upper lip over time.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Gentle laser/IPL application for the delicate upper lip area.",
                        "Reduces hair growth significantly within a few sessions.",
                        "Helps prevent pigmentation and ingrown hairs.",
                        "No downtime, no skin damage."

                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "How long does the session take ?",
                        answer : "Less than 10 minutes."
                    },{
                        question : "Will it cause any darkening ?",
                        answer : "No, it actually helps reduce pigmentation caused by repeated waxing/threading."
                    },{
                        question : "Is it safe for sensitive skin ?",
                        answer : "Yes, we use clinically tested, skin-safe technology with cooling features."
                    }]
                }
            },{
                name : "Beard Line Shaping",
                link : "/beard-line-shaping",
                img : laser,
                img_small : laser_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Maintaining a sharp beard or jawline edge with razors can cause frequent irritation, razor bumps, or uneven growth. Hormonal conditions may also cause unwanted facial hair growth in women along the beard line",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Our Beard Line Shaping Treatment offers clean, symmetrical beard lines or jawline definition using laser hair reduction. It eliminates the need for daily shaving and ensures a well-groomed appearance with minimal maintenance.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Precision laser shaping for jawline, cheeks, and neckline.",
                        "Permanent reduction of unwanted growth in defined areas.",
                        "Ideal for both men (grooming) and women (hormonal hair).",
                        "Customizable hairline contours based on face shape."

                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is it only for men ?",
                        answer : "No, it’s also popular among women facing hormonal facial hair growth."
                    },{
                        question : "Will it give a sharp edge ?",
                        answer : "Yes, laser technology allows for precise shaping and long-term results."
                    },{
                        question : "Will I still need to shave ?",
                        answer : "Minimal shaving may be required in early sessions. Over time, growth significantly reduces."
                    }]
                }
            },{
                name : "Side Lock",
                link : "/side-lock",
                img : laser,
                img_small : laser_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Thick or uneven sideburns can affect facial symmetry and styling preferences. Waxing or shaving side locks frequently can lead to coarse regrowth or shadowing.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Our Side Lock Hair Reduction treatment targets the sideburn area to remove unwanted hair and refine the facial frame. It’s a safe, long-term solution for smoother skin and better contouring of the face.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Laser/IPL removal of sideburns or side facial hair.",
                        "Suitable for shaping or total hair removal.",
                        "Painless and precise, even in narrow facial zones.",
                        "Helps reduce the visibility of facial shadows from coarse hair.",
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Will it make the area look patchy ?",
                        answer : "No. The treatment ensures even reduction and a natural look."
                    },{
                        question : "Is it painful ?",
                        answer : "Most clients report mild warmth or a tingling sensation."
                    },{
                        question : "Can I remove just part of the side lock ?",
                        answer : "Yes, we customize the coverage based on your desired shape."
                    }]
                }
            },{
                name : "Chin",
                link : "/chin",
                img : laser,
                img_small : laser_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Chin hair can be caused by hormonal changes (like PCOS), genetics, or aging. Repeated plucking or shaving can lead to coarse regrowth, pigmentation, and ingrown hairs.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Chin Hair Reduction uses laser technology to target both fine and coarse hair at the root, offering a long-term solution to recurring chin hair growth. It’s particularly effective for treating hormonal or post-menopausal hair issues.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Targets the full chin area or specific patches.",
                        "Works on hormonal and dense growth.",
                        "Reduces pigmentation and bumps from shaving/waxing.",
                        "Safe for all skin tones and types."

                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "How soon will I see results ?",
                        answer : "Some hair reduction is visible after the first session. Optimal results occur after 6–8 treatments."
                    },{
                        question : "Will it worsen my hormonal condition ?",
                        answer : "Not at all. In fact, it manages hair growth linked to hormonal imbalance effectively."
                    },{
                        question : "Can I pair this with jawline shaping ?",
                        answer : "Yes, both can be done in the same session."
                    }]
                }
            }]
        },{
            subCategory : "Body",
            services : [{
                name : "Full Body Hair Reduction",
                link : "/full-body-hair-reduction",
                img : laser,
                img_small : laser_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Frequent shaving, waxing, and ingrown hairs are all caused by unwanted body hair and are all uncomfortable, time-consuming, and transient. These repeated techniques frequently result in uneven skin tone and skin discomfort.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "A thorough treatment that targets all of the body's major areas, full body laser hair reduction provides long-term, smooth, hair-free skin. For both men and women who desire a sleek, clean, and low-maintenance look, it's perfect.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Entire body, including the arms, legs, back, chest, bikini area, and face.",
                        "FDA-approved laser equipment for secure and efficient outcomes.",
                        "Settings tailored to various skin tones and hair types.",
                        "Technology that reduces pain and has cooling mechanisms."

                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "How many sessions are needed ?",
                        answer : "Typically 6–8 sessions spaced 4–6 weeks apart, followed by maintenance sessions."
                    },{
                        question : "Is it safe for sensitive areas ?",
                        answer : "Yes, each area is treated with adjusted settings to suit the skin’s sensitivity."
                    },{
                        question : "Can men also opt for this ?",
                        answer : "Absolutely. We offer full-body plans for both men and women."
                    }]
                }
            },{
                name : "Back & chest",
                link : "/back-and-chest",
                img : laser,
                img_small : laser_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Sweating, body odor, acne, and discomfort can result from having too much hair on the chest and back. These big areas might be challenging to shave and are more likely to get skin infections or ingrown hairs. ",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : `Thick, coarse hair can be successfully removed with back and chest laser hair reduction, leaving the skin smoother and cleaner. 
                        For both men and women who are struggling with excessive growth, it's a great grooming option.
                        `,
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Full upper and lower back.",
                        "Full chest and shoulder areas.",
                        "Targets coarse and dense hair.",
                        "Smooth, hair-free results with minimal discomfort."

                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Does it help with body acne ?",
                        answer : "Yes, by reducing hair and sweat buildup, it can help prevent breakouts."
                    },{
                        question : "Can I treat only the upper back or lower chest ?",
                        answer : "Yes, areas can be customized based on your needs."
                    }]
                }
            }]
        },{
            subCategory : "Legs & Arms",
            services : [{
                name : "Under Arms",
                link : "/under-arms",
                img : laser,
                img_small : laser_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Sweat and bacteria can be trapped by underarm hair, causing pain and stink. Ingrown hairs, itching, and black areas are common side effects of shaving. ",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "A quick and efficient method for achieving smooth, even- toned  underarms is underarm laser hair reduction. It also helps to lessen odor and improve hygiene.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Both underarms with full follicle coverage.",
                        "Pigmentation reduction over time.",
                        "Improves skin texture and tone.",
                        "Takes less than 10 minutes per session"

                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is it painful ?",
                        answer : "The underarm area may feel a slight sting, but our cooling system minimizes discomfort."
                    },{
                        question : "Will it reduce underarm darkness ?",
                        answer : "Yes, by eliminating frequent shaving and irritation, skin tone improves visibly."
                    }]
                }
            },{
                name : "Legs Hair Reduction",
                link : "/legs-hair-reduction",
                img : laser,
                img_small : laser_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Leg shaving or waxing increases the danger of ingrown hairs, stubble, and frequent maintenance. Additionally, hair growth can impact one's self-confidence when wearing dresses, skirts, or shorts. ",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Legs Long-term smooth and hair-free legs are possible with laser hair reduction. It improves skin tone and texture and dramatically lowers hair density.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Full legs (thighs, knees, calves, and feet).",
                        "Ideal for men and women.",
                        "Gentle yet powerful hair reduction.",
                        "Safe for all skin types."

                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Will it affect skin tone ?",
                        answer : "No, in fact, it reduces pigmentation caused by hair removal damage over time."
                    },{
                        question : "Can I just do half legs ?",
                        answer : "Yes, you can opt for upper legs, lower legs, or full legs."
                    }]
                }
            },{
                name : "Bikini Laser Hair Reduction",
                link : "/bikini-laser-hair-reduction",
                img : laser,
                img_small : laser_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Ingrown hairs, pimples, and irritation of delicate skin are common side effects of shaving and waxing in the bikini area. This fragile skin requires a cleaner, safer approach. ",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Hair around the bikini line can be precisely and gently treated with our Bikini Laser Hair Reduction. It is long-lasting, sanitary, and made for delicate skin. ",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Bikini line or extended bikini area.",
                        "FDA-cleared laser technology for intimate zones.",
                        "Prevents razor burns and dark spots.",
                        "Maintains hygiene and comfort."

                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is it safe for sensitive areas ?",
                        answer : "Yes, the procedure is completely safe and tailored for delicate skin."
                    },{
                        question : "How many sessions are needed ?",
                        answer : "Typically 6–8 sessions, with results noticeable after the first few treatments."
                    }]
                }
            },{
                name : "Arms Laser Hair Reduction",
                link : "/arms-laser-hair-reduction",
                img : laser,
                img_small : laser_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Arm hair can result in rough texture and detract from the charm of sleeveless apparel. Over time, frequent shaving or waxing results in skin regrowth, discomfort, and discoloration. ",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "A permanent option that leaves arms hairless and smooth is arms laser hair reduction. It's perfect for people who seek improved skin and hassle-free grooming.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Full or half arm coverage.",
                        "Includes upper arms, forearms, hands, and fingers.",
                        "Quick, comfortable, and highly effective.",
                        "Results in finer, slower regrowth."

                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Will it help with strawberry skin ?",
                        answer : "Yes, laser reduces bumps and uneven texture caused by repeated shaving."
                    },{
                        question : "How long does a session take ?",
                        answer : "Around 20–30 minutes for both arms."
                    }]
                }
            }]
        }]
    },{
        name : "Skin Care",
        link : "/",
        children : [{
             subCategory : "Skin Concerns",
            services : [{
                name : "Anti Ageing",
                link : "/anti-ageing",
                img : skin,
                img_small : skin_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Common indications of aging include fine lines, wrinkles, and sagging skin, which are brought on by environmental stressors, sun exposure, and decreased collagen.The firmness and youthful appearance of the skin are lost when improperly cared for.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Using non-invasive methods like radiofrequency, microneedling, and sophisticated facials designed for older skin, our anti-aging treatments help tighten, smooth wrinkles, and restore suppleness.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Fine lines and wrinkles.",
                        "Sagging skin.",
                        "Loss of firmness and hydration.",
                        "Dull, tired appearance."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Are these treatments safe for all skin types ?",
                        answer : "Yes, we offer customized protocols based on your skin's needs."
                    },{
                        question : "Will I need downtime ?",
                        answer : "Most treatments are non-invasive with minimal or no downtime."
                    }]
                }
            },{
                name : "Skin Pigmentation",
                link : "/skin-pigmentation",
                img : skin,
                img_small : skin_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Hormonal imbalances, acne scars, and sun exposure can all cause pigmentation, dark patches, and uneven skin tone. These have an impact on skin tone and clarity.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Our skin brightening treatments use vitamin infusions, exfoliating peels, and antioxidant therapies to boost radiance and revitalize the complexion.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Sun spots.",
                        "Melasma.",
                        "Post-acne marks.",
                        "Uneven tone."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "How long before I see results ?",
                        answer : "Noticeable changes appear in 3–5 sessions depending on severity."
                    },{
                        question : "Can pigmentation return ?",
                        answer : "With proper maintenance and SPF use, recurrence can be minimized."
                    }]
                }
            },{
                name : "Skin Brightening",
                link : "/skin-brightening",
                img : skin,
                img_small : skin_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Pollution, sun damage, and lifestyle factors can make skin appear dull and tired, lacking its natural glow.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Our skin brightening treatments use vitamin infusions, exfoliating peels, and antioxidant therapies to boost radiance and revitalize the complexion.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Dull and tired skin.",
                        "Uneven skin tone.",
                        "Lack of glow.",
                        "Pollution damage."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is it suitable for sensitive skin ?",
                        answer : "Yes, we offer gentle brightening solutions for all skin types."
                    },{
                        question : "Will my skin look lighter ?",
                        answer : "These treatments aim to restore your natural glow, not bleach your skin."
                    }]
                }
            },{
                name : "Acne treatment",
                link : "/acne-treatment",
                img : skin,
                img_small : skin_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Constant breakouts and acne can be uncomfortable, leave scars, and undermine self-esteem. Root issues are frequently not addressed by over-the-counter remedies. ",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "To lessen outbreaks and inflammation and stop acne in the future, we combine light therapies, acne-clearing facials, and medical-grade treatments.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Active acne and blackheads.",
                        "Oily and congested skin.",
                        "Inflammation and redness.",
                        "Acne scars."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is it safe for teen skin ?",
                        answer : "Yes, we provide tailored acne solutions for all age groups."
                    },{
                        question : "Will I need to stop using my regular skincare ?",
                        answer : "We'll guide you on compatible products to use alongside treatment."
                    }]
                }
            },{
                name : "Stretch Marks",
                link : "/stretch-marks",
                img : skin,
                img_small : skin_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Stretch marks appear as visible lines and changes in the texture of the skin and are caused by rapid weight changes, pregnancy, or muscle growth. ",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "By increasing the synthesis of collagen by topical, laser, or microneedling therapies, our treatments help reduce the appearance of stretch marks.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Red, purple, or white stretch marks.",
                        "Texture improvement.",
                        "Skin strengthening."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Can old stretch marks be treated ?",
                        answer : "Yes, though older marks may take more sessions for visible results."
                    },{
                        question : "Is there downtime ?",
                        answer : "Mild redness is possible, but you can resume daily activities immediately."
                    }]
                }
            },{
                name : "Dull Skin",
                link : "/dull-skin",
                img : skin,
                img_small : skin_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Dull skin lacks radiance due to poor hydration, stress, buildup of dead cells, or environmental toxins.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "We offer revitalizing treatments like oxygen therapy, exfoliation, and hydrating masks to restore healthy, glowing skin.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Dehydration.",
                        "Dead skin buildup.",
                        "Lack of freshness.",
                        "Skin fatigue."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is this a one-time treatment or a routine ?",
                        answer : "You’ll notice instant glow after one session, but regular care maintains the effect."
                    },{
                        question : "Can it be combined with other treatments ?",
                        answer : "Yes, brightening or anti-ageing therapies pair well with dullness repair."
                    }]
                }
            },{
                name : "Under Eyes Dark Circle",
                link : "/under-eyes-dark-circle",
                img : skin,
                img_small : skin_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Lack of sleep, heredity, aging, or stress can all cause dark circles under the eyes, which make you appear exhausted even when you're not. ",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "We provide specialty under-eye treatments that use non- invasive, mild techniques to improve skin texture, increase circulation, and lighten pigmentation.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Pigmentation under eyes.",
                        "Puffiness and hollowing.",
                        "Tired, sunken appearance."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Are these treatments painful ?",
                        answer : "No, they’re non-invasive and designed for delicate eye skin."
                    },{
                        question : "Will it completely remove my dark circles ?",
                        answer : "Significant lightening can be achieved. Complete removal depends on the underlying cause."
                    }]
                }
            }]
        },{
            subCategory : "Routine Skin Care",
            services : [{
                name : "Advanced Facial",
                link : "/advanced-facial",
                img : skin,
                img_small : skin_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Stress, aging, and exposure to the environment all cause our skin to lose its suppleness and brightness. An advanced facial helps restore hydration, balance, and clarity.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "In order to revitalize dull or exhausted skin, our Advanced Facial consists of deep washing, exfoliation, hydration, and specific serums. It's perfect for preserving the general health of your skin. ",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Dull and dehydrated skin.",
                        "Uneven texture.",
                        "Mild pigmentation.",
                        "Clogged pores."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "How often should I get this facial ?",
                        answer : "Once every 3–4 weeks for optimal skin maintenance."
                    },{
                        question : "Is it suitable for sensitive skin ?",
                        answer : "Yes, the treatment is customized based on skin type."
                    }]
                }
            },{
                name : "Signature Facial",
                link : "/signature-facial",
                img : skin,
                img_small : skin_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "A customized strategy is required to address your skin's many problems, including dryness, fine wrinkles, and dullness.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Our Signature Facial is a customized treatment that uses massage methods and high-performance products to deeply nourish and improve your skin.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Early signs of aging.",
                        "Loss of firmness.",
                        "Dehydration.",
                        "Fatigue and stress lines."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "What makes it a “signature” facial ?",
                        answer : "It’s fully customized with premium actives and massage based on your skin's condition."
                    },{
                        question : "Can I do this before an event ?",
                        answer : "Absolutely. It gives a noticeable glow and lift."
                    }]
                }
            },{
                name : "Carbon Facial",
                link : "/carbon-facial",
                img : skin,
                img_small : skin_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Deep detoxification is beneficial for congested, oily, and acne-prone skin types. Carbon facials improve tone and clear pores. ",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "The Carbon Facial eliminates contaminants, eradicates bacteria, and uses a coating of liquid carbon followed by laser light.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Acne and blackheads.",
                        "Enlarged pores.",
                        "Oily skin.",
                        "Dull complexion."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is there any downtime ?",
                        answer : "No. The treatment is gentle with zero downtime."
                    },{
                        question : "How soon can I wear makeup after ?",
                        answer : "After 24 hours, once skin settles."
                    }]
                }
            },{
                name : "Photo Facial",
                link : "/photo-facial",
                img : skin,
                img_small : skin_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Targeted light therapy is necessary to correct symptoms of pigmentation and skin aging, including sun damage, age spots, and uneven skin tone. ",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Light pulses are used in photo facials (IPL therapy) to activate collagen and penetrate the skin, reducing pigmentation and enhancing texture and clarity. ",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Pigmentation.",
                        "Sun spots.",
                        "Fine lines.",
                        "Skin redness."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "How many sessions are needed ?",
                        answer : "4–6 sessions are typically recommended for lasting results."
                    },{
                        question : "Is it painful ?",
                        answer : "Slight warmth or tingling may be felt, but it's well-tolerated."
                    }]
                }
            },{
                name : "Platinum Facial",
                link : "/platinum-facial",
                img : skin,
                img_small : skin_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Basic care is insufficient for mature and aging skin. The goal of the Platinum Facial is to provide powerful anti-aging results.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "For tighter, younger-looking skin, this facial incorporates cutting-edge anti-aging serums, a lifting massage, collagen-boosting chemicals, and high-tech equipment.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Wrinkles and sagging.",
                        "Uneven skin tone.",
                        "Loss of volume.",
                        "Dryness and dullness."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "What age is this facial best for ?",
                        answer : "Ideal for 30+ or anyone experiencing signs of aging."
                    },{
                        question : "Does it have a lifting effect ?",
                        answer : "Yes, visible firming and radiance are noticeable post-session."
                    }]
                }
            }]
        }]
    },{
        name : "Hair Care",
        link : "/",
        children : [{
            subCategory : "Hair Care",
            services : [{
                name : "Hair Loss in Men",
                link : "/hair-loss-in-men",
                img : hair,
                img_small : hair_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Stress, hormonal fluctuations, and male pattern baldness can all cause bald patches or progressive hair loss. Preventing irreversible loss requires early action. ",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "In order to restore density and enhance scalp health, we provide customized solutions for male hair loss, such as PRP, hair strengthening treatments, and scalp therapies.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Receding hairline.",
                        "Thinning crown.",
                        "Diffuse hair loss.",
                        "Weak hair roots."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Are results permanent ?",
                        answer : "Maintenance may be required, but our treatments target long-term improvement."
                    },{
                        question : "Is it suitable for young men ?",
                        answer : "Yes, especially effective when started in early stages of hair loss."
                    }]
                }
            },{
                name : "Hair Loss in Women",
                link : "/hair-loss-in-women",
                img : hair,
                img_small : hair_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Hair thinning in women may be caused by stress, PCOS, hormonal imbalance, or nutritional deficiencies, affecting volume and confidence.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "To increase hair density and stop more loss, we employ moderate, hormone-safe methods including topical nutrition, PRP, and mesotherapy. ",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Diffuse thinning.",
                        "Hairline recession.",
                        "Post-pregnancy hair fall.",
                        "Stress-induced shedding."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Will my hair grow back fully ?",
                        answer : "With regular sessions, regrowth and volume can significantly improve."
                    },{
                        question : "Can I continue salon treatments ?",
                        answer : "Yes, but we recommend avoiding harsh chemicals during therapy."
                    }]
                }
            },{
                name : "Dandruff",
                link : "/dandruff",
                img : hair,
                img_small : hair_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Itching, flaking, and occasionally hair loss are all symptoms of dandruff.Dryness, product accumulation, or fungal infestation can all cause it.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Our dandruff treatment uses medicated solutions and calming therapies to clean, hydrate, and restore the health of the scalp while addressing the underlying problem.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Dry or oily flakes.",
                        "Scalp irritation.",
                        "Inflammation or redness.",
                        "Fungal overgrowth."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "How many sessions are required ?",
                        answer : "Most people see improvement within 3–4 sessions."
                    },{
                        question : "Will dandruff come back ?",
                        answer : "Regular scalp maintenance prevents recurrence."
                    }]
                }
            },{
                name : "Hair Fall",
                link : "/hair-fall",
                img : hair,
                img_small : hair_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "An early indicator of more serious scalp or health problems may be excessive daily hair loss. Balding or thinning may result from ignoring it.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "In order to strengthen follicles, our anti-hair fall programs combine scalp analysis with specific treatments like PRP, serums, and massages.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Sudden or seasonal hair fall.",
                        "Weak hair shafts.",
                        "Poor blood circulation to scalp."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is this different from hair loss treatment ?",
                        answer : "Yes. Hair fall focuses on breakage and shedding, not baldness."
                    },{
                        question : "Can I use home products alongside ?",
                        answer : "Yes, we'll recommend complementary care products."
                    }]
                }
            }]
        },{
            subCategory : "Hair Restoration",
            services : [{
                name : "Non-Surgical Hair Replacement",
                link : "/non-surgical-hair-replacement",
                img : hair,
                img_small : hair_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Treatments for baldness or advanced hair loss might not work. Instant appearance and confidence restoration is possible with aesthetic remedies. ",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "We provide high-end hair systems that are undetectable, customized, and blend in with your natural hair for a seamless appearance, all without the need for surgery. ",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Full or partial hair systems.",
                        "Custom styling and fitting.",
                        "Breathable and natural-looking units."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Can I swim or gym with it ?",
                        answer : "Yes, the hair system is durable and activity-safe."
                    },{
                        question : "Will people notice it’s not real ?",
                        answer : "No, our units are designed to look and feel natural."
                    }]
                }
            },{
                name : "Meso Hair Treatment",
                link : "/meso-hair-treatment",
                img : hair,
                img_small : hair_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "To be healthy, hair follicles need nutrients at the root. Weak hair strands and hair loss are caused by inadequate circulation or nutrients. ",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "A vitamin-rich serum is injected directly into the scalp during mesotherapy to promote growth, fortify roots, and increase volume. ",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Hair thinning.",
                        "Slowed growth.",
                        "Poor scalp nourishment."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is it painful ?",
                        answer : " Slight pricks may be felt, but it’s generally well-tolerated."
                    },{
                        question : "How long before results show ?",
                        answer : "Visible changes in 4–6 sessions."
                    }]
                }
            },{
                name : "GFC Hair Restoration",
                link : "/GFC-hair-restoration",
                img : hair,
                img_small : hair_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Growth Factor Concentrate (GFC), particularly in cases of resistant hair loss, repairs damaged follicles and encourages thick regrowth. ",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "GFC therapy promotes hair restoration by stimulating scalp tissue with your own blood-derived growth factors. ",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Patchy hair loss.",
                        "Resistant bald spots.",
                        "Weak follicle activity."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is this better than PRP ?",
                        answer : "GFC is a more concentrated, newer version of PRP with enhanced effects."
                    },{
                        question : "Any downtime ?",
                        answer : "None. You can resume your routine immediately."
                    }]
                }
            },{
                name : "PRP With SCN Hair Restoration",
                link : "/PRP-with-SCN-hair-restoration",
                img : hair,
                img_small : hair_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "For severe hair thinning, combining PRP with stem cell nutrition (SCN) promotes deeper follicle healing and increased regeneration.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "This dual-therapy strategy improves blood flow, promotes collagen, and fixes cellular damage to the scalp.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Chronic thinning.",
                        "Post-transplant maintenance.",
                        "Delayed follicle activity."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "How is it different from regular PRP ?",
                        answer : "It contains stem cell nutrients for more potent results."
                    },{
                        question : "Is it suitable for both genders ?",
                        answer : "Yes, equally effective for men and women."
                    }]
                }
            }]
        },{
            subCategory : "Hair Treatment",
            services : [{
                name : "Hair spa",
                link : "/hair-spa",
                img : hair,
                img_small : hair_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Stress, style, and pollution harm the hair and scalp. Hair quality is enhanced, the scalp is relaxed, and hydration is restored in a spa. ",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "To revitalize damaged, lifeless hair and promote growth, our hair spa combines natural oils, steam, and scalp massage. ",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Dry and frizzy hair.",
                        "Dull scalp.",
                        "Scalp detox."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "How often should I do it ?",
                        answer : "Once every 2–3 weeks for best results."
                    },{
                        question : "Can I color my hair after ?",
                        answer : "Yes, but wait 48 hours after a spa session."
                    }]
                }
            },{
                name : "Biotop",
                link : "/biotop",
                img : hair,
                img_small : hair_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Chemical exposure causes hair to become brittle and lose protein. Essential keratin and smoothness are restored by Biotop.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Biotop is a professional protein therapy for damaged, over-processed, or dry hair, improving its structure and shine.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Chemically damaged hair.",
                        "Split ends and breakage.",
                        "Frizz and rough texture."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "How long does it last ?",
                        answer : "Results last 4–6 weeks depending on hair care."
                    },{
                        question : "Is it safe for colored hair ?",
                        answer : "Yes, it enhances the shine and strength of colored hair."
                    }]
                }
            },{
                name : "Lipidium",
                link : "/lipidium",
                img : hair,
                img_small : hair_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Dryness and stress leave hair dull and fragile. Lipidium therapy rebuilds hair fiber from the inside out.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "A L'Oréal Professional service, Lipidium reconstructs damaged hair by sealing nutrients and locking in moisture.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Damaged hair structure.",
                        "Dehydrated strands.",
                        "Loss of natural shine."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Will it make my hair flat ?",
                        answer : "No, it adds bounce while restoring volume."
                    },{
                        question : "How often can I do this ?",
                        answer : "Once a month or after chemical treatments."
                    }]
                }
            },{
                name : "Moroccan",
                link : "/moroccan",
                img : hair,
                img_small : hair_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Moroccan oil is rich in antioxidants and fatty acids that deeply nourish and smoothen hair.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Our Moroccan treatment is a luxurious experience that leaves your hair shiny, frizz-free, and silky soft with lasting hydration.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Dry, coarse hair.",
                        "Frizz control.",
                        "Split ends."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is it suitable for daily styling ?",
                        answer : "Yes, it makes hair manageable and heat-protected."
                    },{
                        question : "Will it feel oily ?",
                        answer : "No, it absorbs easily without leaving residue."
                    }]
                }
            },{
                name : "Ozone",
                link : "/ozone",
                img : hair,
                img_small : hair_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Ozone therapy detoxifies the scalp, kills bacteria, and boosts oxygen flow, ideal for dandruff and hair fall.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "This treatment uses ozone steam to purify the scalp, improve blood circulation, and encourage stronger hair growth.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Itchy, flaky scalp.",
                        "Hair thinning.",
                        "Scalp buildup."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is ozone safe for the scalp ?",
                        answer : "Yes, it’s a non-invasive and chemical-free process."
                    },{
                        question : "Does it help with oil control ?",
                        answer : "Yes, it balances sebum production."
                    }]
                }
            },{
                name : "Olaplex",
                link : "/olaplex",
                img : hair,
                img_small : hair_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Coloring and heat tools damage internal hair bonds. Olaplex repairs these bonds, restoring hair from within.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "A salon-favorite, Olaplex strengthens and rebuilds hair structure using patented bond-building technology.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Chemically treated hair.",
                        "Breakage and split ends.",
                        "Brittle texture."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Can I use Olaplex at home too ?",
                        answer : "Yes, we offer in-clinic and homecare options."
                    },{
                        question : "How soon will I feel the difference ?",
                        answer : "After just one session, hair feels significantly stronger and smoother."
                    }]
                }
            }]
        }]
    },{
        name : "Cosmetics",
        link : "/",
        children : [{
            subCategory : "",
            services : [{
                name : "Anti ageing treatment ",
                link : "/anti-ageing-treatment",
                img : cosmetics,
                img_small : cosmetics_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Collagen synthesis slows down with age, resulting in drooping skin, fine lines, and wrinkles. Delaying visible aging and maintaining youthful skin are two benefits of early action.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Our anti-aging procedures use cutting-edge, non-invasive methods to increase suppleness, moisturize the skin, and promote collagen.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Fine lines and wrinkles.",
                        "Sagging skin.",
                        "Loss of firmness.",
                        "Dull, tired appearance."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "When should I start anti-ageing treatments ?",
                        answer : "Mid to late 20s is a good time to start preventative care."
                    },{
                        question : "Are these treatments safe for sensitive skin ?",
                        answer : "Yes, all treatments are customized based on skin type."
                    }]
                }
            },{
                name : "Non Surgical Face Lift ",
                link : "/non-surgical-face-lift ",
                img : cosmetics,
                img_small : cosmetics_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Over time, the skin and muscles in the face become less elastic, which causes drooping and sagging. Firmness and shape can be restored with a non-surgical face lift.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Without the dangers of surgery, this therapy lifts and tones the skin using cutting-edge technology like radiofrequency, ultrasound, or threads.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Drooping cheeks or jawline.",
                        "Wrinkles and folds.",
                        "Skin laxity.",
                        "Early signs of aging."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is there any downtime ?",
                        answer : "No, it's a walk-in, walk-out procedure."
                    },{
                        question : "How long do results last ?",
                        answer : "Results typically last 12–18 months with maintenance."
                    }]
                }
            },{
                name : "Non Surgical Breast Upliftment ",
                link : "/non-surgical-breast-upliftment",
                img : cosmetics,
                img_small : cosmetics_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Breasts might become less firm with age, weight loss, and nursing. Enhancing shape without surgery is possible with non-surgical upliftment.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "This procedure tightens breast tissue and increases collagen using RF or ultrasound technology to give a modest yet noticable lift.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Mild to moderate sagging.",
                        "Post-pregnancy breast reshaping.",
                        "Loss of volume or firmness."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is it painful ?",
                        answer : "No, the procedure is painless and non-invasive."
                    },{
                        question : "How many sessions are needed ?",
                        answer : "Usually 6–8 sessions, depending on individual needs."
                    }]
                }
            },{
                name : "Thread Lift",
                link : "/thread-lift",
                img : cosmetics,
                img_small : cosmetics_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : " A thread lift can immediately improve the facial features when the skin starts to droop, particularly around the cheekbones and jawline.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Biodegradable threads are put beneath the skin to tighten and lift drooping areas while promoting the generation of collagen.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Nasolabial folds.",
                        "Jawline and cheek lifting.",
                        "Eyebrow and neck lift."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is the result visible immediately ?",
                        answer : "Yes, results are seen instantly and improve over time."
                    },{
                        question : "Do the threads stay in the skin ?",
                        answer : "No, they dissolve naturally within months."
                    }]
                }
            },{
                name : "Chemical Peels",
                link : "/chemical-peels",
                img : cosmetics,
                img_small : cosmetics_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Chemical exfoliation can be used to treat pigmentation, dead skin cells, acne scars, and uneven texture.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "By removing the skin's outer layer with mild acids, chemical peels encourage skin regeneration and reveal clearer, smoother skin underneath.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Acne and blemishes.",
                        "Pigmentation.",
                        "Textural irregularities.",
                        "Dullness."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Will my skin peel after the session ?",
                        answer : "Mild flaking may occur depending on the peel's strength."
                    },{
                        question : "How many sessions are recommended ?",
                        answer : "Typically 4–6 sessions for optimal results."
                    }]
                }
            },{
                name : "Skin Care",
                link : "/skin-care",
                img : cosmetics,
                img_small : cosmetics_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Daily skin care promotes long-term skin health by preventing acne, dullness, and premature aging.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Our expert skin care regimens include protection, nourishment, and deep cleansing based on the particular requirements of your skin.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Customized skincare regimens.",
                        "Hydration and repair.",
                        "Acne and oil control.",
                        "Preventative maintenance."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Can I combine this with other treatments ?",
                        answer : "Yes, skin care treatments often enhance results of other procedures."
                    },{
                        question : "Do you provide home care guidance ?",
                        answer : "Absolutely, we offer personalized product recommendations."
                    }]
                }
            },{
                name : "Dermal Fillers",
                link : "/dermal-fillers",
                img : cosmetics,
                img_small : cosmetics_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Deep wrinkles, thin lips, and sunken cheeks are the results of facial volume loss. Dermal fillers instantly improve face features and restore volume.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Fillers are injectable gels composed of hyaluronic acid or comparable compounds that smooth out wrinkles and plump up specific regions to provide the appearance of natural skin.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Smile lines and marionette lines.",
                        "Lip enhancement.",
                        "Cheek and chin contouring.",
                        "Under-eye volume loss."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Are fillers permanent ?",
                        answer : "No, most fillers last 6–18 months depending on the type."
                    },{
                        question : "Is there any swelling ?",
                        answer : "Mild swelling may occur for 24–48 hours post-treatment."
                    }]
                }
            },{
                name : "Microdermabrasion ",
                link : "/microdermabrasion ",
                img : cosmetics,
                img_small : cosmetics_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Uneven texture, plugged pores, and dead skin cells can all contribute to the skin's lifeless appearance. For a smoother shine, microdermabrasion aids in resurfacing the skin.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Using crystals or a diamond-tipped wand, this non-invasive procedure exfoliates the skin's outermost layer, promoting cell turnover and enhancing skin clarity.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Rough texture.",
                        "Mild acne scars.",
                        "Dull complexion.",
                        "Clogged pores."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is it painful ?",
                        answer : "No, the procedure is gentle and well-tolerated."
                    },{
                        question : "How many sessions are required ?",
                        answer : "A series of 4–6 sessions is typically recommended."
                    }]
                }
            },{
                name : "Collagen treatment",
                link : "/collagen-treatment ",
                img : cosmetics,
                img_small : cosmetics_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Loss of collagen causes fine wrinkles, sagging skin, and volume loss. Collagen production increases the firmness and flexibility of the skin.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "This procedure stimulates the creation of collagen and restores the young texture of the skin using sophisticated serums, lasers, or microneedling.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Wrinkles and fine lines.",
                        "Loss of firmness.",
                        "Early signs of aging."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is there downtime ?",
                        answer : "Minimal to none. Mild redness may appear for a few hours."
                    },{
                        question : "When will I see results ?",
                        answer : "Improvements begin within 2–4 weeks and build over time."
                    }]
                }
            },{
                name : "Scar Revision",
                link : "/scar-revision",
                img : cosmetics,
                img_small : cosmetics_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Acne, trauma, or surgical scars can impact one's self-esteem and skin attractiveness. Revision of scars reduces their visibility.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "To lessen scars' depth, color, and look, we provide procedures like microneedling, laser therapy, and mild excision.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Acne scars.",
                        "Injury or surgical scars.",
                        "Pigmented or raised scars."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Will the scar disappear completely ?",
                        answer : "The goal is significant improvement; complete removal may not always be possible."
                    },{
                        question : "Is it suitable for all skin types ?",
                        answer : "Yes, treatments are tailored to suit different skin tones."
                    }]
                }
            },{
                name : "Earlobe Repair",
                link : "/earlobe-repair",
                img : cosmetics,
                img_small : cosmetics_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "For a natural look, surgical repair is required for earlobes that have been torn, strained, or split by trauma or heavy earrings.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "A modest outpatient surgery with little recovery time that uses local anesthetic to mend and restore the contour of the earlobe.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Split earlobes.",
                        "Stretched piercing holes.",
                        "Asymmetrical earlobes."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Can I re-pierce after repair ?",
                        answer : "Yes, usually after 6–8 weeks of healing."
                    },{
                        question : "Will there be a scar ?",
                        answer : "Scarring is minimal and typically fades over time."
                    }]
                }
            },{
                name : "Chin Reshaping ",
                link : "/chin-reshaping",
                img : cosmetics,
                img_small : cosmetics_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "A protruding or receding chin can alter the symmetry of the face. Reshaping the chin improves harmony and profile.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "While surgical methods modify bone structure, non-surgical chin contouring uses dermal fillers to increase volume or contour.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Weak chin.",
                        "Chin dimples or asymmetry.",
                        "Disproportionate facial features."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is it reversible ?",
                        answer : "Filler-based reshaping is reversible; surgery is permanent."
                    },{
                        question : "How long do fillers last ?",
                        answer : "Typically 12–18 months."
                    }]
                }
            },{
                name : "Cheek & Chin Enhancement",
                link : "/cheek-and-chin-enhancement",
                img : cosmetics,
                img_small : cosmetics_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Facial shape may be impacted by flat or ill-defined cheekbones and chin. Improvements produce definition and bring back loudness.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "We improve the cheek and chin regions for a more youthful, contoured appearance by using dermal fillers or non-surgical sculpting procedures.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Hollow cheeks.",
                        "Weak chin structure.",
                        "Facial asymmetry."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Does it look natural ?",
                        answer : "Yes, we ensure balanced, natural-looking results."
                    },{
                        question : "Is there downtime ?",
                        answer : "Minimal—mild swelling may occur for 1–2 days."
                    }]
                }
            },{
                name : "Eyebrow Enhancement",
                link : "/eyebrow-nhancement",
                img : cosmetics,
                img_small : cosmetics_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Eyebrows that are flat, sparse, or uneven can affect appearance and facial expression. The brows are lifted and redefined via enhancements.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "To improve and contour your natural brow line, we provide solutions like filler-based raising, brow tinting, and microblading.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Sparse brows.",
                        "Uneven arch.",
                        "Drooping brow tail."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "How long does microblading last ?",
                        answer : "Around 12–18 months depending on skin type and care."
                    },{
                        question : "Is it painful ?",
                        answer : "Numbing cream is used to ensure comfort."
                    }]
                }
            },{
                name : "Lip Augmentation",
                link : "/lip-augmentation",
                img : cosmetics,
                img_small : cosmetics_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Enhancing asymmetrical, thin, or undefined lips can improve facial expression and harmony.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Hyaluronic acid-based fillers are used in this procedure to provide the lips volume, definition, and moisture with results that look natural.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Thin or uneven lips.",
                        "Lip symmetry.",
                        "Volume loss."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Will my lips look fake ?",
                        answer : "No, we focus on enhancing your natural shape and proportions."
                    },{
                        question : "How long do results last ?",
                        answer : "Typically 6–12 months depending on product and lifestyle."
                    }]
                }
            },{
                name : "Rahinoplasty (Nose)",
                link : "/rahinoplasty-nose",
                img : cosmetics,
                img_small : cosmetics_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "An excessively big, crooked, or uneven nose can overpower other facial characteristics. Rhinoplasty improves harmony and balance.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "The nose can be reshaped by rhinoplasty to enhance attractiveness or address breathing problems. There are options that are both surgical and non-surgical.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Nose hump or bump.",
                        "Wide or crooked nose.",
                        "Nasal tip refinement."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is surgery required for minor changes ?",
                        answer : "No, non-surgical rhinoplasty using fillers is an option for minor corrections."
                    },{
                        question : "What is the recovery time ?",
                        answer : "Surgical rhinoplasty takes 1–2 weeks to recover; non-surgical has minimal downtime."
                    }]
                }
            }]
        }]
    },{
        name : "Beauty & Grooming",
        link : "/",
        children : [{
            subCategory : "Skin Essential",
            services : [{
                name : "Threading",
                link : "/threading",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Unwanted facial hair can have an impact on the face's general appearance and cleanliness. Sensitive parts are threaded gently and precisely.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Threading is a precise method of removing hair from the root using twisted cotton thread; it works particularly well on the brows and other face areas.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Eyebrows.",
                        "Upper lip.",
                        "Forehead.",
                        "Chin and sideburns."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "How long do results last ?",
                        answer : "Typically 2–4 weeks depending on hair growth."
                    },{
                        question : "Is it safe for sensitive skin ?",
                        answer : "Yes, it's chemical-free and ideal for delicate skin."
                    }]
                }
            },{
                name : "Waxing",
                link : "/waxing",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Compared to shaving, waxing promotes smoother skin and slower regrowth by removing hair from the root.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "We effectively remove hair from different body parts using premium wax (honey, chocolate, or Rica), leaving the skin feeling soft and clean.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Arms and legs.",
                        "Underarms.",
                        "Back and chest.",
                        "Bikini and full body."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "How often should I wax ?",
                        answer : "Every 4–6 weeks, depending on hair growth."
                    },{
                        question : "Can waxing cause ingrown hair ?",
                        answer : "Proper exfoliation and aftercare reduce the risk significantly."
                    }]
                }
            },{
                name : "Bleach",
                link : "/bleach",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Lightening facial or body hair that is too fine to be removed can give you a cleaner appearance by blending it with your natural skin tone.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Bleaching treatments brighten the skin and lighten face and body hair using safe formulas.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Face and neck.",
                        "Arms and legs.",
                        "Back and midriff."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Does bleaching damage the skin ?",
                        answer : "No, we use skin-friendly, dermatologically tested products."
                    },{
                        question : "How often can I bleach ?",
                        answer : "Once every 4–6 weeks."
                    }]
                }
            },{
                name : "Body Polishing",
                link : "/body-polishing",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "The skin can appear lifeless due to tanning, dead skin accumulation, and dullness. Shine and smoothness are restored by body polishing.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Using scrubbing, massages, and nourishing creams, body polishing removes dead skin, balances out tone, and hydrates.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Full body exfoliation.",
                        "Skin brightening.",
                        "Pre-bridal glow.",
                        "Tan removal."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is it suitable for all skin types ?",
                        answer : "Yes, the process is customized based on skin condition."
                    },{
                        question : "How often should I get it done ?",
                        answer : "Once a month or before special events."
                    }]
                }
            },{
                name : "Body Strap",
                link : "/body-strap",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Dirt and dead skin build up in hard-to-reach places on the torso and back. A body strap facilitates efficient deep cleaning of those regions.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "During exfoliating treatments, a body strap scrub is used to clean, exfoliate, and revitalize the skin, especially the back.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Back exfoliation.",
                        "Deep cleansing.",
                        "Tan removal."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is it part of body polishing ?",
                        answer : "It can be a standalone service or added to polishing or massages."
                    },{
                        question : "Does it help with back acne ?",
                        answer : "Yes, it aids in unclogging pores and reducing breakouts."
                    }]
                }
            },{
                name : "Ubtan",
                link : "/ubtan",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Herbal mixtures used in traditional skincare can naturally nourish, brighten, and purify the skin.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "In order to exfoliate, brighten, and soften skin, ubtan is a herbal concoction of organic substances such as gram flour, sandalwood, and turmeric.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Bridal skincare.",
                        "Skin brightening.",
                        "Natural exfoliation.",
                        "Tanning and oil control."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is it safe for sensitive skin ?",
                        answer : ": Yes, it's 100% natural and customized as per your skin type."
                    },{
                        question : "How often should I use ubtan ?",
                        answer : "Once a week for glowing, even-toned skin."
                    }]
                }
            },{
                name : "Menicure",
                link : "/menicure",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Hands are exposed to the sun, grime, and pollution all the time. A manicure maintains your hands' soft, healthy skin and clean nails.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "For well-groomed hands, a manicure includes cuticle maintenance, exfoliation, massage, nail shaping, and polish application.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Nail cleaning and shaping.",
                        "Dead skin removal.",
                        "Hydration and polish."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "How often should I get a manicure ?",
                        answer : "Every 2–3 weeks depending on nail growth."
                    },{
                        question : "Is it suitable for men ?",
                        answer : "Absolutely. Groomed hands are essential for everyone."
                    }]
                }
            },{
                name : "Pedicure",
                link : "/pedicure",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Neglecting the feet can result in dry, cracked skin and poor personal hygiene. Clean, smooth, and relaxed feet are encouraged by pedicures.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "For the best foot care and relaxation, our pedicure consists of soaking, cleaning, nail and cuticle care, massage, and polishing.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Callus and dead skin removal.",
                        "Nail and toe grooming.",
                        "Skin softening and relaxation."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is pedicure good for cracked heels ?",
                        answer : "Yes, it helps reduce and prevent cracked heels."
                    },{
                        question : "How frequently should I do it?",
                        answer : "Once every 3–4 weeks for healthy feet."
                    }]
                }
            },]
        },{
            subCategory : "Facial Treatment",
            services : [{
                name : "Facial",
                link : "/facial",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Frequent facials support a clear, moisturized complexion by cleansing, exfoliating, and nourishing the skin.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Facials are personalized procedures that use a variety of methods and products to address specific skin concerns, such as dryness, acne, dullness, or aging symptoms.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Cleansing and exfoliation.",
                        "Hydration and glow.",
                        "Anti-aging and brightening.",
                        "Relaxation and stress relief."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "How often should I get a facial ?",
                        answer : "Every 4–6 weeks is ideal for maintaining skin health."
                    },{
                        question : "Can facials cause breakouts ?",
                        answer : "If done correctly with clean tools and suitable products, they won’t."
                    }]
                }
            },{
                name : "Kanpeki",
                link : "/kanpeki",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Over time, aging symptoms and environmental stress cause the skin to become dull. Kanpeki aids in firmness and brightness restoration.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Kanpeki is a high-end facial treatment that uses Japanese products and technology to brighten, purify, and deeply revitalize the skin.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Anti-aging.",
                        "Deep hydration.",
                        "Firmness and glow."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is Kanpeki suitable for sensitive skin ?",
                        answer : "Yes, it's designed for all skin types including sensitive."
                    },{
                        question : "How soon will I see results ?",
                        answer : "Immediate glow with better texture over 2–3 sessions."
                    }]
                }
            },{
                name : "Skinora",
                link : "/skinora",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "The skin becomes dull and uneven as a result of stress and pollution. Deep repair and renewal are provided by Skinora.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Skinora targets texture, dullness, and pigmentation by delivering active ingredients into the skin using sophisticated formulations.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Uneven skin tone.",
                        "Mild pigmentation.",
                        "Skin fatigue."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Does it include extraction ?",
                        answer : "Yes, along with massage and advanced skin boosters."
                    },{
                        question : "Is it painful ?",
                        answer : "No, it’s gentle and non-invasive."
                    }]
                }
            },{
                name : "Casmara",
                link : "/casmara",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Advanced care is necessary to restore freshness to dry and tired skin. Casmara facials provide deep renewal and nourishment.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Casmara, a high-end Spanish facial company, uses vitamin and mineral-rich algae peel-off masks to promote healthy, radiant skin.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Dehydrated skin.",
                        "Skin fatigue.",
                        "Redness and sensitivity."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Are the masks peel-off type ?",
                        answer : "Yes, they form a cooling layer and are easily removed."
                    },{
                        question : "Can it calm irritated skin ?",
                        answer : "Absolutely. It's designed to soothe and hydrate."
                    }]
                }
            },{
                name : "Platinum",
                link : "/platinum",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Our skin becomes less elastic and shiny as we get older. Deep rejuvenation and anti-aging advantages are provided by platinum facials.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Advanced massage techniques and platinum-rich formulations are used in this facial to firm, lift, and cleanse the skin.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        " Wrinkles and sagging.",
                        "Loss of radiance.",
                        "Mature skin care."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is it a luxury facial ?",
                        answer : "Yes, ideal for special occasions or mature skin."
                    },{
                        question : "How often can I do it ?",
                        answer : "Once every 4–6 weeks for lasting results."
                    }]
                }
            },{
                name : "Korean glass facial",
                link : "/korean-glass-facial",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : 'Hydration and texture refinement are provided by this facial for a poreless, radiant, "glass skin" finish.',
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "This K-beauty-inspired treatment consists of several moisturizing layers, calming masks, and brightening serums for glowing, dewy skin.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Dull and dry skin.",
                        "Uneven tone.",
                        "Dehydration and flakiness."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Will my skin look glassy after one session ?",
                        answer : "Yes, you’ll notice a visible glow immediately."
                    },{
                        question : "Is it suitable for oily skin ?",
                        answer : "Yes, it hydrates without clogging pores."
                    }]
                }
            },{
                name : "Galvanic",
                link : "/galvanic",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Nutrient absorption may be impacted by aging skin and poor circulation. Galvanic treatments improve skin tone and product penetration.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Low-voltage currents are used in galvanic facials to increase blood flow, cleanse, and facilitate the deep penetration of skincare products.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Premature aging.",
                        "Puffiness and dullness.",
                        "Congested skin."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is it safe ?",
                        answer : "Yes, it’s a clinically safe and non-invasive treatment."
                    },{
                        question : "How does it feel ?",
                        answer : "Slight tingling, but no discomfort."
                    }]
                }
            },{
                name : "Oxygeno",
                link : "/oxygeno",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Fatigue and aging can be caused by a lack of oxygen in the skin. OxyGeneo promotes cell regeneration and circulation.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "A 3-IN-1 facial that instantly brightens and rejuvenates the skin by exfoliating, oxygenating, and nourishing it.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Dullness and fatigue.",
                        "Uneven texture.",
                        "Dehydration and lines."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is this similar to a HydraFacial ?",
                        answer : "It offers similar benefits with an oxygenation twist."
                    },{
                        question : "Is there any downtime ?",
                        answer : "None – it’s a lunch-hour facial."
                    }]
                }
            },{
                name : "O3+",
                link : "/O3",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Pigmentation and dull skin are caused by pollutants, sun exposure, and contaminants. O3+ uses clinical formulae to target these.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "O3+ is a high-end facial brand that offers products for radiance, hydration, acne prevention, and teeth whitening.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Pigmentation.",
                        "Uneven skin tone.",
                        "Skin detox."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "How long do results last ?",
                        answer : "Effects last 2–3 weeks; regular sessions maintain the glow."
                    },{
                        question : "Is it suitable for bridal prep ?",
                        answer : "Yes, it’s commonly recommended for pre-event skincare."
                    }]
                }
            },{
                name : "Aroma facials",
                link : "/aroma-facials",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "The skin suffers from environmental damage and stress. Aroma facials mix skin nourishment and relaxation.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "This facial enhances circulation, soothes the senses, and leaves the skin feeling renewed with the use of essential oils and a light massage.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Stressed and tired skin.",
                        "Mild dryness.",
                        "Sensitive skin."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Will the oils clog pores ?",
                        answer : "No, they’re carefully selected to suit your skin type."
                    },{
                        question : "Is it relaxing ?",
                        answer : "Extremely – it soothes both skin and mind.    "
                    }]
                }
            }]
        },{
            subCategory : "Makeup",
            services : [{
                name : "Bridal Makeup",
                link : "/bridal-makeup",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "One of the most unforgettable days of your life is your wedding. Bridal makeup guarantees that you will appear stunning, self-assured, and perfect throughout the event.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Bridal makeup is applied with precision and durability, utilizing airbrush or high-definition (HD) techniques. It is tailored to your skin tone, attire, theme, and individual style while making sure it is photo-ready from every aspect.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Skin prep and priming.",
                        "HD/Airbrush makeup.",
                        "Eye makeup and lashes.",
                        "Lip contouring and setting.",
                        "Final touch-ups."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "How long does bridal makeup last ?",
                        answer : "Typically 8–12 hours, resistant to sweat and tears."
                    },{
                        question : "Can I do a trial beforehand ?",
                        answer : "Yes, trials are highly recommended for best results."
                    }]
                }
            },{
                name : "Party Makeup",
                link : "/party-makeup",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "A sophisticated and glitzy appearance is essential for a big occasion or a night out. Your features are accentuated by party makeup, giving you a sophisticated look.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "With a well-balanced appearance appropriate for dinners, birthday parties, cocktail nights, or festivities, party makeup aims to accentuate your inherent attractiveness.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Foundation and contouring.",
                        "Eye makeup (glam or subtle).",
                        "Lip color coordination.",
                        "Hair styling add-ons (optional)."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "How is party makeup different from bridal makeup?",
                        answer : "It’s lighter, quicker, and ideal for shorter durations."
                    },{
                        question : "Can it be customized ?",
                        answer : "Absolutely—styles range from natural to bold."
                    }]
                }
            },{
                name : "Groom’s Makeup",
                link : "/groom’s-makeup",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "For the groom, weddings hold equal significance. Without being overdone, makeup guarantees a photo-ready image and an even skin tone.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Lightweight, matte makeup products are used in groom's makeup to reduce shine and hide flaws, bringing out features while keeping a natural appearance.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Skin prep and moisturizer.",
                        "Concealer and light foundation.",
                        "Shine control and setting.",
                        "Beard shaping and brow grooming."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Will it look obvious in photos ?",
                        answer : "No, it’s designed to look natural on and off camera."
                    },{
                        question : " Is it mandatory for all grooms ?",
                        answer : "It’s optional, but highly recommended for HD photography."
                    }]
                }
            },{
                name : "Engagement Makeup",
                link : "/engagement-makeup",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "The first significant pre-wedding event is your engagement. It establishes the tone for your wedding journey, and a gorgeous appearance is crucial.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Engagement makeup is the ideal mix of elegance and understatement. It keeps you looking stunning for the ring ceremony and goes well with your attire and theme.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Skin correction and base.",
                        "Eye and lip focus.",
                        "Contouring and highlights.",
                        "Hair and jewelry setting support."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is it similar to bridal makeup ?",
                        answer : "It’s lighter and less elaborate but equally detailed."
                    },{
                        question : "Should I do a trial ?",
                        answer : "Trials help align makeup with your overall theme."
                    }]
                }
            },{
                name : "Mehndi Makeup",
                link : "/mehndi-makeup",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : " The Mehndi ritual is colorful and joyous. Your appearance should be light and durable while capturing the hues and excitement of the event.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Mehndi makeup is vibrant, multicolored, and lively, with a focus on comfort and durability. It's perfect for musical and dance-based pre-wedding events.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Dewy base and blush tones.",
                        "Eye shimmer or bright hues.",
                        "Waterproof setting.",
                        "Coordinated lip color and accessories."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is it sweat-proof ?",
                        answer : "Yes, it’s designed to last through dancing and celebrations."
                    },{
                        question : "Can it match my Mehndi outfit ?",
                        answer : "Yes, the look is customized to complement your attire and jewelry."
                    }]
                }
            }]
        },{
            subCategory : "Salon",
            services : [{
                name : "Global colouring",
                link : "/global-colouring",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Heat styling, regular washings, and exposure to the sun all cause hair color to fade over time. Global coloring gives your hair a consistent, vivid tone that improves your appearance overall. It's perfect for a total makeover or grey covering.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Applying a single hue across the head is known as global coloring. It revitalizes drab or fading hair by adding an even tone and gloss.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Full-head coloring.",
                        "Grey coverage.",
                        "Shine and tone enhancement."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Will it damage my hair ?",
                        answer : "No, we use ammonia-free and nourishing formulas."
                    },{
                        question : "How long does it last ?",
                        answer : "4–6 weeks with proper hair care."
                    }]
                }
            },{
                name : "Streaking",
                link : "/streaking ",
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "When hair appears flat, streaking gives it depth, dimension, and style. Depending on the hue used, it draws attention to important face features and produces a subtle or powerful accent. It's a stylish method to update your appearance without switching up your entire color scheme.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Coloring particular hair strands to contrast with or enhance your natural hair color is known as streaking. It can be tailored for high-impact drama or understated elegance.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Face-framing streaks.",
                        "Colored highlights.",
                        "Custom streak placement."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is bleach used for streaking ?",
                        answer : "Yes, in most cases—but we use protective treatments."
                    },{
                        question : "Can I choose the color ?",
                        answer : "Absolutely—custom shades are available."
                    }]
                }
            },{
                name : "Keratin",
                link : "/keratin",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Hair can be difficult to manage if it has frizz, a rough texture, and lack of luster. Keratin treatments remove damage from heat and chemicals and replenish lost protein. It makes the hair shinier, smoother, and simpler to style.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "By adding protein to the hair, keratin treatments make it smoother and stronger. It restores a smooth, polished look and lessens frizz.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Frizz control.",
                        "Smooth, straight finish.",
                        "Hair strengthening."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is it permanent ?",
                        answer : "No, results last 3–5 months, depending on care."
                    },{
                        question : "Will it damage my hair ?",
                        answer : "No, it actually strengthens and protects hair."
                    }]
                }
            },{
                name : "Botox",
                link : "/botox",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Damage, pollution, or aging cause hair to lose its elasticity and sheen. Botox revitalizes hair from the inside out, giving it back its natural movement, thickness, and softness. It is ideal for dull, brittle, or severely dry hair.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Hair Botox: This protein-rich, deep-conditioning treatment moisturizes and smoothes hair without changing its natural texture.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Damaged hair repair.",
                        "Deep conditioning.",
                        "Volume and shine enhancement."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Is this like hair straightening ?",
                        answer : "No, it's a restorative treatment, not a straightener."
                    },{
                        question : "How often should I do it ?",
                        answer : "Every 2–3 months for best results."
                    }]
                }
            },{
                name : "Hair Cut",
                link : "/hair-cut",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Frequent haircuts encourage stronger, healthier hair growth and eliminate broken ends. Additionally, they keep volume and form, which gives you a clean, renewed appearance. Your facial features can be significantly improved with the correct haircut.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "From trims to complete makeovers, we provide customized haircuts depending on your hair type, face shape, and lifestyle preferences.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Layering and shaping.",
                        "Precision cutting.",
                        "Style consultation."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Can I get a makeover cut ?",
                        answer : "Yes, our stylists offer full transformation options."
                    },{
                        question : "Will the cut suit my face ?",
                        answer : "Our experts will guide you based on your features."
                    }]
                }
            },{
                name : "Hair Style",
                link : "/hair-style",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "You can look your best at every event, whether it's a meeting, party, or informal get-together, with the help of styling. It gives you more confidence and polishes your appearance. Even the most basic fashions can improve clothing and face attributes.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "For any occasion and taste, we provide blowouts, curls, straightening, buns, and braids.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Blow-drying and ironing.",
                        "Curls, waves, and updos.",
                        "Event styling."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "How long does the styling last ?",
                        answer : "1–2 days depending on weather and hair type."
                    },{
                        question : "Can I get styling without a haircut ?",
                        answer : "Yes, styling can be done independently."
                    }]
                }
            },{
                name : "Hair Color",
                link : "/hair-color",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Color gives your haircut character, personality, and vibrancy. It lets you show off your uniqueness and keep up with the latest fashions. Additionally, hair color helps cover gray hair and improve your appearance in general.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Our hair coloring services, which are customized to fit your skin tone and style, include global color, highlights, lowlights, and balayage.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Full or partial coloring.",
                        "Root touch-up.",
                        "Color correction."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Will it suit my skin tone ?",
                        answer : "Yes, our experts help select the most flattering shade."
                    },{
                        question : "Is it safe for damaged hair ?",
                        answer : "Yes, we use ammonia-free, nourishing products."
                    }]
                }
            },{
                name : "Hair Texture",
                link : "/hair-texture",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "The appearance and styling versatility of your hair can be impacted by unmanageable curls, flatness, or excessive volume. In order to achieve the desired look, hair texturing treatments can assist shape, smoothing, or adding volume. It reduces styling time and improves manageability.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "We provide smoothing, perming, and straightening services to safely and successfully change the texture of your hair.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Permanent smoothening or straightening.",
                        "Perms and curls.",
                        "Frizz control treatments."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "How long do texturing treatments last ?",
                        answer : "4–6 months with proper care."
                    },{
                        question : "Can I color my hair after texturing ?",
                        answer : "Yes, but it’s best done with professional advice."
                    }]
                }
            },{
                name : "Head Wash",
                link : "/head-wash",
                img : beauty,
                img_small : beauty_small,
                section_1 : {
                    title : "WHY DO WE NEED IT?",
                    desc_1 : "Oil, perspiration, and product accumulation over time can clog pores and make hair look lifeless. A professional head wash leaves your hair feeling light and renewed by thoroughly cleaning the scalp. For optimal effects, it must be done before cutting or styling.",
                    options : [],
                    desc_2 : ""
                },
                section_2 : {
                    title : "ABOUT",
                    desc_1 : "Gentle washing, conditioning, and a scalp massage that encourages relaxation and blood flow are all included in a head wash.",
                },
                section_3 : {
                    title : "WHAT WE COVER ?",
                    desc_1 : "",
                    options : [
                        "Scalp cleansing.",
                        "Hair softening and detangling.",
                        "Optional serum or mask add-on."
                    ]
                },
                section_4 : {
                    title : "FAQs",
                    section  : [{
                        question : "Can I do it before styling or cutting ?",
                        answer : "Yes, it's usually included before most hair services."
                    },{
                        question : "Is it suitable for sensitive scalps ?",
                        answer : "Yes, we use mild and sulfate-free products."
                    }]
                }
            }]
        }]
    }]