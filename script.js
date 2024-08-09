// JavaScript object containing the resources
const resources = [
  {
      name: "How to keep your job search on track",
      url: "https://www.linkedin.com/pulse/how-keep-your-job-search-track-amid-news-layoffs-andrew-seaman-vpywc/"
  },
  {
      name: "Tech Interviews | algochurn ",
      url: "https://www.algochurn.com/"
  },
  {
      name: "19 Job Interview Questions Tips that will GET YOU HIRED",
      url: "https://www.jobscan.co/blog/job-interview-tips/"
  },
  {
      name: "Exponent for Interview Prep",
      url: "https://tryexponent.notion.site/How-to-use-Exponent-for-Interview-Prep-Lighthouse-Labs-7ea9b4a3137b4696a1b32bc3a57b2e50"
  },
  {
      name: "Resume Accomplishments Examples",
      url: "https://www.jobscan.co/blog/resume-accomplishments-examples/"
  },
  {
      name: "Skipthedrive",
      url: "https://buff.ly/3B1XAZY"
  },
  {
      name: "Wellfound",
      url: "https://buff.ly/41hxrkI"
  },

  {
      name: "Remoteok",
      url: "https://buff.ly/3KPOy5V"
  },

  {
      name: "The Forage - Design Simulations",
      url: "https://www.theforage.com/simulations?careers=design"
  },
  {
      name: "Web Dev Simplified - Web Dev Roadmap",
      url: "https://webdevsimplified.com/web-dev-roadmap.html"
  },
  {
      name: "Pangian",
      url: "https://pangian.com/"
  },
  {
      name: "We Work Remotely",
      url: "https://weworkremotely.com/"
  },
  {
      name: "ARC",
      url: "https://arc.dev/"
  },
  {
      name: "Remotive",
      url: "https://remotive.com/"
  },
  {
      name: "JustRemote",
      url: "https://justremote.co/"
  },
 
  {
      name: "Jobspresso",
      url: "https://jobspresso.co/"
  },
  {
      name: "DailyRemote",
      url: "https://dailyremote.com/"
  },
  {
      name: "Working Nomads",
      url: "https://lnkd.in/dJKgGBTx"
  },
  {
      name: "RemoteLeaf",
      url: "https://remoteleaf.com/"
  },
  {
      name: "Careerflow.ai",
      url: "https://www.careerflow.ai/"
  },
  {
      name: "LeetCode",
      url: "https://leetcode.com/"
  },
  {
      name: "HackerRank",
      url: "https://www.hackerrank.com/"
  },
  {
      name: "HackerEarth",
      url: "https://www.hackerearth.com/"
  },
  {
      name: "Codewars",
      url: "https://www.codewars.com/"
  },
  {
      name: "CodeChef",
      url: "https://www.codechef.com/"
  },
  {
      name: "CodingNinjas",
      url: "https://www.codingninjas.com/"
  },
  {
      name: "Topcoder",
      url: "https://www.topcoder.com/"
  },
  {
      name: "Coderbyte",
      url: "https://coderbyte.com/"
  },
  {
      name: "Geektastic",
      url: "https://geektastic.com/"
  },
  {
      name: "freeCodeCamp",
      url: "https://www.freecodecamp.org/"
  },
  {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/"
  },
  {
      name: "Comparably",
      url: "https://lnkd.in/ggZ4xhE7"
  },
  {
      name: "Levels.fyi",
      url: "http://www.levels.fyi/"
  },
  {
      name: "Salary.com",
      url: "https://www.salary.com/"
  },
  {
      name: "Glassdoor",
      url: "http://www.glassdoor.com/"
  },
  {
      name: "Payscale",
      url: "http://www.payscale.com/"
  },
  {
      name: "PaycheckCity Payroll",
      url: "https://www.paycheckcity.com/"
  },
  
  {
      name: "Remote.co",
      url: "https://remote.co/"
  },
  {
      name: "Devsnaps",
      url: "https://devsnap.me/"
  },
  {
      name: "RemoteOK",
      url: "https://remoteok.com/"
  },
  {
      name: "FlexJobs",
      url: "https://www.flexjobs.com/"
  },
  {
      name: "remote4me",
      url: "https://remote4me.com/"
  },
  {
      name: "RemoteHabits",
      url: "https://remotehabits.com/"
  },
  {
      name: "Remote Workmate",
      url: "https://remoteworkmate.com/"
  },
  {
      name: "FindAsync",
      url: "https://www.findasync.com/"
  },
  {
      name: "Indeed",
      url: "https://ca.indeed.com/"
  },
  {
      name: "Working Nomads",
      url: "https://www.workingnomads.com/jobs"
  },
  {
      name: "Crossover",
      url: "https://www.crossover.com/"
  },
  {
      name: "Talent",
      url: "https://ca.talent.com/"
  },
  {
      name: "Dynamite Jobs",
      url: "https://dynamitejobs.com/"
  },
  {
      name: "Authentic Brands Group",
      url: "https://corporate.authentic.com/"
  },
  {
      name: "PowerToFly",
      url: "https://powertofly.com/"
  },
  {
      name: "AngelList",
      url: "https://www.angellist.com/"
  },
  {
      name: "Wellfound",
      url: "https://wellfound.com/"
  },
  {
      name: "Dribble",
      url: "https://dribbble.com/"
  },
  {
      name: "Built In",
      url: "https://builtin.com/"
  },
  {
      name: "Tech Junction",
      url: "https://techjunction.co/"
  },
  {
      name: "Tech Jobs for Good",
      url: "https://techjobsforgood.com/"
  },
  {
      name: "JobsFactory",
      url: "https://jobsfactory.org/"
  },
  {
      name: "Citizen Remote",
      url: "https://citizenremote.com/"
  },
  {
      name: "NoDesk",
      url: "https://nodesk.co/"
  },
  {
      name: "NoCommute",
      url: "https://www.nocommutejob.com/"
  },
  {
      name: "AI Jobs",
      url: "https://aijobs.ai/"
  },
  {
      name: "Job Bank",
      url: "https://www.jobbank.gc.ca/marketreport/jobs/17892/ca"
  }
];

// Function to generate the grid items
function generateGrid() {
  const container = document.getElementById('grid-container');

  resources.forEach(resource => {
      const item = document.createElement('a');
      item.className = 'grid-item';
      item.href = resource.url;
      item.target = '_blank';
      item.textContent = resource.name;

      container.appendChild(item);
  });
}

// Generate the grid on page load
window.onload = generateGrid;
