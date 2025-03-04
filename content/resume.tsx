import { IconArticle, IconBrandGithub, IconBrandLinkedin, IconHome, IconMail } from '@/components/icons';

const resume = {
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

  name: 'Nhân',
  shortname: 'Hieu Nhan',
  fullname: 'Nguyễn Thị Hiếu Nhân',
  initials: 'Nhân',
  domain: 'https://hieunhan.vercel.app',
  experience: [
    {
      title: 'Intern at Marketing and Communications Team',
      company: 'Fulbright University Vietnam',
      color: '#ffad1d',
      logo: '/images/fulbright-logo.jpeg',
      dates: 'August 2023 - Present',
      linkedin: 'https://www.linkedin.com/company/pacificlinks',
      description: (
        <ul className="flex flex-col gap-4 tracking-tight">
          <li>
            Creating content, designing and editing videos for school promotion, including school Facebook Page, Tiktok
            and Instagram. Highlighted sample with 1{' '}
            <a className="font-semibold text-[#ffad1d]" href="https://www.facebook.com/share/p/M1K4WcNQaJQMvm77/">
              post
            </a>{' '}
            and 1{' '}
            <a className="font-semibold text-[#ffad1d]" href="https://fb.watch/tvwQmFp95T/">
              video
            </a>
            <span>.</span>
          </li>
          <li>
            Main coordinator for Stage Preparation of Fulbright Convocation 2023, including managing and assisting new
            cohort talent performances, leading the backstage logistics such as sounds and lighting. The event is an
            important event of Fulbright with the scope of hundreds students and faculties, and 30+ strategic partners
            and donors.
          </li>
        </ul>
      )
    },
    {
      title: 'President',
      company: 'FUV Social Impact Catalyst Vietnam',
      color: '#4472C4',
      logo: '/images/sic-logo.png',
      dates: 'January 2023 - Present',
      linkedin: 'https://www.linkedin.com/company/pacificlinks',
      description: (
        <ul className="flex flex-col gap-4">
          <li>
            Co-building the FUV SIC’s mission and vision. As a school chapter of{' '}
            <a className="font-semibold text-[#4472C4]" href="https://www.socialimpactcatalyst.org/">
              Social Impact Catalyst
            </a>{' '}
            Singapore, FUV SIC runs as a form of student club with an aim to enhance social impact spirit for Fulbright
            students.
          </li>
          <li>
            Leading the team of 12 people to execute the flagship impact project -{' '}
            <a className="font-semibold text-[#4472C4]" href="https://www.facebook.com/fuvsic.ilmprogram">
              Impact Leader Mentorship Program
            </a>
            <span>.</span> Oversee all the process of the project including researching current needs of the target
            audience; validating the hypothesis, outlining the program’s key objectives, timeline and activities;
            executing 1.5 month program with the total of 5 mentor-mentee group.
          </li>
        </ul>
      )
    },
    {
      title: 'Admissions Student Assistant Workstudy',
      company: 'Fulbright University Vietnam',
      color: '#ffad1d',
      logo: '/images/fulbright-logo.jpeg',
      dates: 'August 2021 - Present',
      linkedin: 'https://www.linkedin.com/company/pacificlinks',
      description: (
        <ul className="flex flex-col gap-4">
          <li>
            Leading of a team of 7 people virtually, arrange all the process of Buddies program for 7 highschool
            students.
          </li>
          <li>
            Designing and editing videos for admissions promotion, highlighted samples with 1 ads running{' '}
            <a className="font-semibold" href="https://www.facebook.com/share/p/GfzP49X1AJBhnWaE/">
              post
            </a>{' '}
            and 1{' '}
            <a className="font-semibold" href="https://fb.watch/tvwQmFp95T/">
              video
            </a>
            <span>.</span>
          </li>
          <li>
            Working with large data and intensive information due to admission process. Working with lots of stake
            holders such as highschool students, undergraduate students and faculties along the way to process the tasks
            and timeline.
          </li>
        </ul>
      )
    },
    {
      title: 'Intern at Development and Strategic Initiatives Department',
      company: 'Fulbright University Vietnam',
      color: '#ffad1d',
      logo: '/images/fulbright-logo.jpeg',
      dates: 'August 2022 - August 2023',
      linkedin: 'https://www.linkedin.com/company/pacificlinks',
      description: (
        <ul>
          <li>
            Main coordinator of Talent Giving at{' '}
            <a
              className="font-semibold text-[#ffad1d]"
              href="https://fulbright.edu.vn/fulbright-fun-run-2023-where-the-spirit-of-community-and-friendship-truly-shined/"
            >
              Fulbright Giving Week
            </a>
            <span>,</span> including manage all stakeholders involved in holding Giving Sessions and promote them to
            reach to the target of 2000 USD donation.
          </li>
          <li>
            Being in-charged of researching and outreaching leads of in-kind sponsors for the upcoming Fulbright Run
            Race with the expected volume of 20,000 online runners and 7,000 offline runners. Managing the whole 200
            leads in the scope of reaching out, communicating, and enhancing partnerships.
          </li>
          <li>
            Being an ambassador for Fulbright students spirit and being the representative to meet high-class sponsors
            to share about Fulbright vision and mission. Deeply experiencing the bare roots of Fulbright initiatives to
            follow its vision.
          </li>
        </ul>
      )
    },
    {
      title: 'President',
      company: 'Fulbright University Business Club',
      color: '#00196e',
      logo: '/images/fbc-logo.jpg',
      dates: 'August 2022 - August 2023',
      linkedin: 'https://www.linkedin.com/company/pacificlinks',
      description: (
        <ul>
          <li>
            Main allocating all processes of FBC, including recruiting new members, planning the AY club timeline,
            managing human resources and club activities, as well as coordinating stakeholders in implementing club
            projects.
          </li>
          <li>
            Successfully completed the two-semester plan covering gathering 22 members, co-organized 6 internal training
            workshops, 3 external training workshops (1 C level and 2 Manager level), and 3 field trips to Companies
            (Shopee, VNG, Timo), other collaboration with external clubs and Fulbright departments; and enhencing club’s
            bonding with internal activities.
          </li>
          <li>
            Leading coreteam to initiate a full transition process including engagement, recruitment, training and
            reflection to sustainably encourage the young leaders to be enhancing the club’s vision and mission.
          </li>
        </ul>
      )
    }
  ],
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
