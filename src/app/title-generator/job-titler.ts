export class JobTitler {
  levels = [
    'Entry-level',
    'Junior', 'Junior', 'Junior',  // Weighted!
    'Senior', 'Senior', 'Senior',  // Weighted!
    'Principal',
    'Lead',
    'Chief',
    'Professional',
    'Consulting',
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
    'Content',
    'Customer',
    'Data',
    'Data-entry',
    'Database',
    'Deployment',
    'Devops',
    'Documentation',
    'Embedded Systems',
    'ETL',
    'Frontend',
    'Full-Stack',
    'Functional',
    'Hotfix',
    'Information',
    'Infrastructure',
    'Integration',
    'Interface',
    'IT',
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
    'SEO',
    'Server',
    'Support',
    'UI',
    'UX',
    'Web',

    // languages/frameworks
    '.NET',
    'ActionScript',
    'Angular',
    'AppleScript',
    'C#',
    'C++',
    'COBOL',
    'Django',
    'ECMAScript',
    'Elm',
    'F#',
    'Flash',
    'Java',
    'JavaScript',
    'Objective C',
    'Perl',
    'PHP',
    'PL/SQL',
    'PostgreSQL',
    'Python',
    'R',
    'Regex',
    'Ruby on Rails',
    'Rust',
    'Scala',
    'SQL Server',
    'SQL',
    'Swift',
    'UML',
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
    'Designer',
    'Director',
    'Enthusiast',
    'Evangelist',
    'Hacker',
    'Handler',
    'Intern',
    'Investigator',
    'Maintainer',
    'Manager',
    'Mentor',
    'Modeler',
    'Monkey',
    'Programmer',
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
