export class JobTitler {
  levels = [
    'Entry-level',
    'Part-time',
    'Associate',
    'Junior', 'Junior', 'Junior',  // Weighted!
    'Senior', 'Senior', 'Senior',  // Weighted!
    'Principal',
    'Senior Principal',
    'Lead',
    'Chief',
    'Professional',
    'Consulting',
    'Distinguished',
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
    'Agile',
    'Blockchain',
    'Business Systems',
    'Business',
    'Cloud',
    'Community',
    'Corporate',
    'Cross-platform',
    'Enterprise',
    'Growth-hacking',
    'Mainframe',
    'Open-source',
    'Solution',
    'Systems',
  ]

  subfields = [
    'Development',
    'Engineering',
    'Quality',
  ]

  specialties = [
    'Account',
    'AI',
    'Analytics',
    'API',
    'Application',
    'Architecture',
    'Automation',
    'Backend',
    'Backup',
    'Big Data',
    'Command-line',
    'Communications',
    'Computer',
    'Container',
    'Content',
    'Customer Success',
    'Customer',
    'Data Center',
    'Data-entry',
    'Data',
    'Database',
    'Deep Learning',
    'Deployment',
    'Design',
    'Devops',
    'Documentation',
    'Embedded Systems',
    'ETL',
    'Framework',
    'Frontend',
    'Full-Stack',
    'Functional',
    'Hotfix',
    'IDE',
    'Information Security',
    'Information Systems',
    'Information',
    'Infrastructure',
    'Integration',
    'Intelligence',
    'Interface',
    'IoT',
    'IT Support',
    'IT',
    'Knowledge',
    'Legacy Code',
    'Library',
    'Localization',
    'Machine Learning',
    'Maintenance',
    'Microservices',
    'Mobile',
    'Network',
    'Neural Network',
    'Online',
    'Operations',
    'Pipeline',
    'Platform',
    'Privacy',
    'Release',
    'Sales Incentive',
    'Sales',
    'Scalability',
    'Search',
    'Security',
    'SEO',
    'Server',
    'Social',
    'Strategy',
    'Support',
    'Telecommunications',
    'Transformation',
    'Translation',
    'UI',
    'UX',
    'Web',

    // cloud technologies
    'AWS',
    'Azure',
    'GCP',
    'Kubernetes',
    'OpenShift',
    'VMware',

    // languages/frameworks/tools
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
    'Docker',
    'ECMAScript',
    'Elm',
    'Erlang',
    'F#',
    'Finatra',
    'Flash',
    'Fortran',
    'GitLab CI/CD',
    'Go',
    'Haskell',
    'HTML',
    'Java',
    'JavaScript',
    'JSON',
    'Julia',
    'Kotlin',
    'Lisp',
    'Lua',
    'Node.js',
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
    'React',
    'Regex',
    'Ruby on Rails',
    'Rust',
    'Serverless',
    'Scala',
    'Scratch',
    'Spring',
    'SQL Server',
    'SQL',
    'Swift',
    'TensorFlow',
    'TypeScript',
    'UML',
    'Visual Basic',
    'WordPress',
    'XML',
    'YAML',
  ]

  dayjobs = [
    'Engineer', 'Engineer', 'Engineer', 'Engineer',  // Weighted!
    'Developer', 'Developer', 'Developer', 'Developer',  // Yeah!
    'Accelerator',
    'Admin',
    'Advisor',
    'Advocate',
    'Agent',
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
    'Expert',
    'Follower',
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
    'Moderator',
    'Monkey',
    'Ninja',
    'Optimizer',
    'Owner',
    'Programmer',
    'Relationship Manager',
    'Reviewer',
    'Rockstar',
    'Scientist',
    'Script Kiddie',
    'Scrum Master',
    'Specialist',
    'Statistician',
    'Student',
    'Supervisor',
    'Team Lead',
    'Technician',
    'Technologist',
    'Tester',
    'Thinker',
    'Transformer',
    'Translator',
    'Truther',
    'Worker',
    
    // Maximum degradation
    'Asset',
    'Coffee-Fetcher',
    'Cog',
    'Drone',
    'Resource',
    'Slave',
    'Tool',
  ]

  suffixes = [
    'II',
    'III',
    'IV',

    // certifications
    'CCNA',  // Cisco Certified Network Associate
    'CSM',  // Certified Scrum Master
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
