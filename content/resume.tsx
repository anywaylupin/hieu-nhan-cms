import { IconArticle, IconBrandGithub, IconBrandLinkedin, IconHome, IconMail } from '@/components/icons';

const resume = {
  title: 'Hieu Nhan',
  description: 'My Personal Blog',
  hero: {
    heading: "I'm Nhan",
    subheading: (
      <>
        <p> A senior Economics major at</p>
        <b className="text-fulbright bg-fulbright-foreground">Fulbright University Vietnam</b>
      </>
    ),
    image: '/images/me-clear.png'
  },
  about: {
    heading: "My ultimate goal is to create a societal impact as a way to give back for what I've received.",
    subheading:
      'I am enthusiastic about challenging myself through a variety of work experiences and am open to different fields to learn and develop my skills. Being a young woman living in a complex and rapidly changing world, I adopted the mission of contributing to the development and closing the gap of inequality among people. To achieve that mission, I urged myself to involve myself in experiencing knowledge and improving my skillset, and mindset in Sustainability Development.',
    image: '/images/fbc-cv.jpg'
  },
  experience: {
    heading:
      "Enter your years of experience here, along with the types of companies or organisations you've worked with.",
    subheading:
      'Highlight how you excel in your role. Are you great at team collaboration? Solving challenging problems? Make it known here.',
    testimonial:
      "Example of a testimonial: NAME's design expertise was pivotal in elevating our website's user experience. Their innovative solutions and keen eye for aesthetics significantly boosted our online engagement. Highly recommend their skills for impactful design projects.",
    list: [
      {
        logo: '/images/fulbright-logo.jpeg',
        title: 'Intern at Marketing and Communications Team',
        company: 'Fulbright University Vietnam',
        color: '#ffad1d',
        dates: 'August 2023 - Present',
        description:
          'Creating content, designing and editing videos for school promotion, including school Facebook Page, Tiktok and Instagram. Main coordinator for Stage Preparation of Fulbright Convocation 2023, including managing and assisting new cohort talent performances, leading the backstage logistics such as sounds and lighting. The event is an important event of Fulbright with the scope of hundreds students and faculties, and 30+ strategic partners and donors.'
      },
      {
        logo: '/images/sic-logo.png',
        title: 'President',
        company: 'FUV Social Impact Catalyst Vietnam',
        color: '#4472C4',
        dates: 'January 2023 - Present',
        description:
          'Co-building the FUV SIC’s mission and vision. As a school chapter of Social Impact Catalyst Singapore, FUV SIC runs as a form of student club with an aim to enhance social impact spirit for Fulbright students. Leading the team of 12 people to execute the flagship impact project - Impact Leader Mentorship Program. Oversee all the process of the project including researching current needs of the target audience; validating the hypothesis, outlining the program’s key objectives, timeline and activities; executing 1.5 month program with the total of 5 mentor-mentee group.'
      },
      {
        logo: '/images/fulbright-logo.jpeg',
        title: 'Admissions Student Assistant Workstudy',
        company: 'Fulbright University Vietnam',
        color: '#ffad1d',
        dates: 'August 2021 - Present',
        description:
          'Leading of a team of 7 people virtually, arrange all the process of Buddies program for 7 highschool students. Designing and editing videos for admissions promotion, highlighted samples with 1 ads running post and 1 video. Working with large data and intensive information due to admission process. Working with lots of stake holders such as highschool students, undergraduate students and faculties along the way to process the tasks and timeline.'
      },
      {
        logo: '/images/fulbright-logo.jpeg',
        title: 'Intern at Development and Strategic Initiatives Department',
        company: 'Fulbright University Vietnam',
        color: '#ffad1d',
        dates: 'August 2022 - August 2023',
        description:
          'Main coordinator of Talent Giving at Fulbright Giving Week, including manage all stakeholders involved in holding Giving Sessions and promote them to reach to the target of 2000 USD donation. Being in-charged of researching and outreaching leads of in-kind sponsors for the upcoming Fulbright Run Race with the expected volume of 20,000 online runners and 7,000 offline runners. Managing the whole 200 leads in the scope of reaching out, communicating, and enhancing partnerships. Being an ambassador for Fulbright students spirit and being the representative to meet high-class sponsors to share about Fulbright vision and mission. Deeply experiencing the bare roots of Fulbright initiatives to follow its vision.'
      },
      {
        logo: '/images/fbc-logo.jpg',
        title: 'President',
        company: 'Fulbright University Business Club',
        color: '#00196e',
        dates: 'August 2022 - August 2023',
        description:
          'Main allocating all processes of FBC, including recruiting new members, planning the AY club timeline, managing human resources and club activities, as well as coordinating stakeholders in implementing club projects. Successfully completed the two-semester plan covering gathering 22 members, co-organized 6 internal training workshops, 3 external training workshops (1 C level and 2 Manager level), and 3 field trips to Companies (Shopee, VNG, Timo), other collaboration with external clubs and Fulbright departments; and enhencing club’s bonding with internal activities. Leading coreteam to initiate a full transition process including engagement, recruitment, training and reflection to sustainably encourage the young leaders to be enhancing the club’s vision and mission.'
      }
    ]
  },
  domain: 'https://hieunhan.vercel.app',
  projects: [
    {
      title: 'Example',
      image: '/shopper.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A quod reiciendis veniam dicta unde deserunt repudiandae delectus voluptatibus corrupti, ut eum autem quibusdam asperiores laborum harum hic laudantium fugiat voluptatem.',
      tags: ['tag1', 'tag2', 'tag3'],
      website: 'https://slp-dev.vercel.app',
      highlight: '#0047CB'
    }
  ],
  navbar: [
    { title: 'Home', icon: <IconHome />, href: '/' },
    { title: 'Blogs', icon: <IconArticle />, href: '/posts' },
    { title: 'GitHub', icon: <IconBrandGithub />, href: 'https://github.com/anywaylupin' },
    { title: 'Linkedin', icon: <IconBrandLinkedin />, href: 'https://www.linkedin.com/in/lupinnguyen' },
    { title: 'Send Email', icon: <IconMail />, href: 'mailto:lupin.nguyen@outlook.com' }
  ]
};

export default resume;
