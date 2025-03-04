import { Button } from './ui';

export default function Experience() {
  return (
    <section className="relative grid h-screen w-screen flex-shrink-0 grid-cols-2 grid-rows-1">
      {/* Title and Description */}
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Experience</h1>
        <p className="text-xl text-gray-600">
          Enter your years of experience here, along with the types of companies or organisations you've worked with.
          Highlight how you excel in your role. Are you great at team collaboration? Solving challenging problems? Make
          it known here.
        </p>
      </div>

      {/* Work Experience */}
      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Work experience</h2>

        <div className="space-y-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-xl font-semibold">Job Title | Company Name</h3>
              <p className="text-gray-600">Year Started — Year Ended</p>
              <p className="text-gray-600">
                Summarise your role and key responsibilities. Did you lead a team, solve critical issues, or contribute
                to special projects? Include that information here.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div className="flex items-center justify-between rounded-lg bg-gray-100 p-8 shadow-md">
        <div>
          <p className="mb-4 text-lg italic">
            "Example of a testimonial: NAME's design expertise was pivotal in elevating our website's user experience.
            Their innovative solutions and keen eye for aesthetics significantly boosted our online engagement. Highly
            recommend their skills for impactful design projects."
          </p>
          <p className="font-semibold">First Name, Last Name</p>
          <p className="text-gray-600">Company & Role</p>
        </div>
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-200">
          <span className="font-semibold">Photo</span>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-12 mb-6">
        <h2 className="mb-4 text-2xl font-semibold">Skills</h2>
        <ul className="list-inside list-disc space-y-2 text-gray-600">
          <li>Discovery sessions</li>
          <li>User Research</li>
          <li>Ideation Workshops</li>
          <li>Design Research</li>
          <li>Rapid Prototyping</li>
          <li>UI Design</li>
          <li>Usability testing</li>
        </ul>
      </div>

      {/* Button to view projects */}
      <div>
        <Button className="mt-6 text-xl" size="lg">
          View recent projects →
        </Button>
      </div>
    </section>
  );
}
