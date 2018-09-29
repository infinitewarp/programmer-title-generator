export class JobTitler {
  levels = [
    'Entry-level',
    'Associate',
    'Junior', 'Junior', 'Junior',  // Weighted!
    'Senior', 'Senior', 'Senior',  // Weighted!
    'Principal',
    'Senior Principal',
    'Lead',
    'Chief',
    'Professional',
    'Consulting',
    'Fellow',
    'Technical',
    'Executive',
    'Senior Executive',
    'Chief Executive',
  ]

  fields = [
    'Software', 'Software', 'Software',  // Weighted!
    'Product', 'Product',  // Weighted!
    'Project', 'Project',  // Weighted!
    'Systems',
    'Mainframe',
    'Agile',
    'Open-source',
    'Growth-hacking',
    'Business Systems',
    'Business',
    'Corporate',
    'Cloud',
  ]

  subfields = [
    'Development',
    'Quality',
  ]

  specialties = [
    'Account',
    'Analytics',
    'API',
    'Application',
    'Architecture',
    'Automation',
    'Backend',
    'Business Intelligence',
    'Communications',
    'Computer',
    'Content',
    'Customer Success',
    'Customer',
    'Data Center',
    'Data',
    'Data-entry',
    'Database',
    'Deployment',
    'Design',
    'Devops',
    'Documentation',
    'Embedded Systems',
    'ETL',
    'Frontend',
    'Full-Stack',
    'Functional',
    'Hotfix',
    'Information Security',
    'Information Systems',
    'Information',
    'Infrastructure',
    'Integration',
    'Interface',
    'IT',
    'IT Support',
    'Knowledge',
    'Legacy Code',
    'Maintenance',
    'Machine Learning',
    'Mobile',
    'Network',
    'Online',
    'Operations',
    'Pipeline',
    'Release',
    'Sales',
    'Sales Incentive',
    'SEO',
    'Security',
    'Server',
    'Software Maintenance',
    'Strategy',
    'Support',
    'Telecommunications',
    'UI',
    'UX',
    'Web',

    // cloud technologies
    'AWS',
    'Azure',
    'GCP',
    'VMware',

    // languages/frameworks
    '.NET',
    'ActionScript',
    'Angular',
    'AppleScript',
    'Bash',
    'BASIC',
    'C#',
    'C++',
    'COBOL',
    'CSS',
    'Django',
    'ECMAScript',
    'Elm',
    'Erlang',
    'F#',
    'Flash',
    'Fortran',
    'Go',
    'Haskell',
    'HTML',
    'Java',
    'JavaScript',
    'Julia',
    'Lisp',
    'Lua',
    'Objective-C',
    'Pascal',
    'Perl',
    'PHP',
    'PL/SQL',
    'PostgreSQL',
    'PowerShell',
    'Prolog',
    'Python',
    'R',
    'Regex',
    'Ruby on Rails',
    'Rust',
    'Scala',
    'Scratch',
    'SQL Server',
    'SQL',
    'Swift',
    'TypeScript',
    'UML',
    'Visual Basic',
    'WordPress',
    'XML',
  ]

  dayjobs = [
    'Engineer', 'Engineer', 'Engineer', 'Engineer',  // Weighted!
    'Developer', 'Developer', 'Developer', 'Developer',  // Yeah!
    'Admin',
    'Advocate',
    'Analyst',
    'Architect',
    'Button-pusher',
    'Cheerleader',
    'Coder',
    'Consultant',
    'Contractor',
    'Coordinator',
    'Designer',
    'Director',
    'Enthusiast',
    'Evangelist',
    'Genius',
    'Guru',
    'Hacker',
    'Handler',
    'Intern',
    'Investigator',
    'Know-it-all',
    'Maintainer',
    'Manager',
    'Master',
    'Mentor',
    'Modeler',
    'Monkey',
    'Ninja',
    'Programmer',
    'Relationship Manager',
    'Rockstar',
    'Scientist',
    'Script Kiddie',
    'Scrum Master',
    'Specialist',
    'Team Lead',
    'Technician',
    'Tester',
    'Truther',
  ]

  suffixes = [
    'II',
    'III',
    'IV',
    'CSM',  // Certified Scrum Master
    'CCNA',  // Cisco Certified Network Associate
    'MCSE',  // Microsoft Certified Solutions Expert
    'OCPJP',  // Oracle Certified Professional Java Programmer
    'PMP',  // Project Manager Professional
    'RHCA', // Red Hat Certified Architect
    'RHCE', // Red Hat Certified Engineer
    'RHCJD', // Red Hat Certified JBoss Developer
    'RHCSA', // Red Hat Certified System Administrator
  ]

  coinToss = function() {
      return Math.floor(Math.random() * 2) === 0;
  }

  choice = function(fromArray) {
    return fromArray[Math.floor(Math.random() * fromArray.length)];
  }

  getRandom = function() {
    var titleComponents = [];
    if (this.coinToss()) {
        titleComponents.push(this.choice(this.levels));
    }
    if (this.coinToss()) {
        titleComponents.push(this.choice(this.fields));
    }
    if (this.coinToss()) {
        titleComponents.push(this.choice(this.subfields));
    }
    if (this.coinToss() || this.coinToss()) {
        titleComponents.push(this.choice(this.specialties));
    }
    titleComponents.push(this.choice(this.dayjobs));
    if (this.coinToss() && this.coinToss()) {
        titleComponents.push(this.choice(this.suffixes));
    }
    return titleComponents.join(' ');
  }
}
