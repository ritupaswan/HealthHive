import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    
            {
                _id: 'doc1',
                name: 'Dr. Rajesh Kumar',
                image: doc1,
                speciality: 'General physician',
                degree: 'MBBS',
                experience: '4 Years',
                about: 'Dr. Kumar has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 50,
                address: {
                    line1: '17th Cross, MG Road',
                    line2: 'Bengaluru, Karnataka'
                }
            },
            {
                _id: 'doc2',
                name: 'Dr. Priya Sharma',
                image: doc2,
                speciality: 'Gynecologist',
                degree: 'MBBS',
                experience: '3 Years',
                about: 'Dr. Sharma has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 60,
                address: {
                    line1: '27th Cross, Indiranagar',
                    line2: 'Bengaluru, Karnataka'
                }
            },
            {
                _id: 'doc3',
                name: 'Dr. Vijay Singh',
                image: doc3,
                speciality: 'Dermatologist',
                degree: 'MBBS',
                experience: '1 Year',
                about: 'Dr. Singh has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 30,
                address: {
                    line1: '37th Cross, Koramangala',
                    line2: 'Bengaluru, Karnataka'
                }
            },
            {
                _id: 'doc4',
                name: 'Dr. Arjun Patel',
                image: doc4,
                speciality: 'Pediatricians',
                degree: 'MBBS',
                experience: '2 Years',
                about: 'Dr. Patel has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 40,
                address: {
                    line1: '47th Cross, Jayanagar',
                    line2: 'Bengaluru, Karnataka'
                }
            },
            {
                _id: 'doc5',
                name: 'Dr. Sneha Reddy',
                image: doc5,
                speciality: 'Neurologist',
                degree: 'MBBS',
                experience: '4 Years',
                about: 'Dr. Reddy has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 50,
                address: {
                    line1: '57th Cross, HSR Layout',
                    line2: 'Bengaluru, Karnataka'
                }
            },
            {
                _id: 'doc6',
                name: 'Dr. Vikram Gupta',
                image: doc6,
                speciality: 'Neurologist',
                degree: 'MBBS',
                experience: '4 Years',
                about: 'Dr. Gupta has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 50,
                address: {
                    line1: '57th Cross, Whitefield',
                    line2: 'Bengaluru, Karnataka'
                }
            },
            {
                _id: 'doc7',
                name: 'Dr. Ramesh Iyer',
                image: doc7,
                speciality: 'General physician',
                degree: 'MBBS',
                experience: '4 Years',
                about: 'Dr. Iyer has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 50,
                address: {
                    line1: '17th Cross, Sadashivnagar',
                    line2: 'Bengaluru, Karnataka'
                }
            },
            {
                _id: 'doc8',
                name: 'Dr. Yug Desai',
                image: doc8,
                speciality: 'Gynecologist',
                degree: 'MBBS',
                experience: '3 Years',
                about: 'Dr. Desai has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 60,
                address: {
                    line1: '27th Cross, Basavanagudi',
                    line2: 'Bengaluru, Karnataka'
                }
            },
            {
                _id: 'doc9',
                name: 'Dr. Kavita Rao',
                image: doc9,
                speciality: 'Dermatologist',
                degree: 'MBBS',
                experience: '1 Year',
                about: 'Dr. Rao has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 30,
                address: {
                    line1: '37th Cross, Malleshwaram',
                    line2: 'Bengaluru, Karnataka'
                }
            },
            {
                _id: 'doc10',
                name: 'Dr. Sanjay Joshi',
                image: doc10,
                speciality: 'Pediatricians',
                degree: 'MBBS',
                experience: '2 Years',
                about: 'Dr. Joshi has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 40,
                address: {
                    line1: '47th Cross, Rajajinagar',
                    line2: 'Bengaluru, Karnataka'
                }
            },
            {
                _id: 'doc11',
                name: 'Dr. Ananya Menon',
                image: doc11,
                speciality: 'Gastroenterologist',
                degree: 'MBBS',
                experience: '4 Years',
                about: 'Dr. Menon has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 50,
                address: {
                    line1: '57th Cross, Yelahanka',
                    line2: 'Bengaluru, Karnataka'
                }
            },
            {
                _id: 'doc12',
                name: 'Dr. Rahul Nair',
                image: doc12,
                speciality: 'Neurologist',
                degree: 'MBBS',
                experience: '4 Years',
                about: 'Dr. Nair has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 50,
                address: {
                    line1: '57th Cross, Electronic City',
                    line2: 'Bengaluru, Karnataka'
                }
            },
            {
                _id: 'doc13',
                name: 'Dr. Divya Choudhary',
                image: doc13,
                speciality: 'General physician',
                degree: 'MBBS',
                experience: '4 Years',
                about: 'Dr. Choudhary has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 50,
                address: {
                    line1: '17th Cross, Hebbal',
                    line2: 'Bengaluru, Karnataka'
                }
            },
            {
                _id: 'doc14',
                name: 'Dr. Karthik Malhotra',
                image: doc14,
                speciality: 'Gynecologist',
                degree: 'MBBS',
                experience: '3 Years',
                about: 'Dr. Malhotra has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 60,
                address: {
                    line1: '27th Cross, Banashankari',
                    line2: 'Bengaluru, Karnataka'
                }
            },
            {
                _id: 'doc15',
                name: 'Dr. Neha Kapoor',
                image: doc15,
                speciality: 'Dermatologist',
                degree: 'MBBS',
                experience: '1 Year',
                about: 'Dr. Kapoor has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 30,
                address: {
                    line1: '37th Cross, JP Nagar',
                    line2: 'Bengaluru, Karnataka'
                }
            }
        ]