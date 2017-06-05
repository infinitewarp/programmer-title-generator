export class JobTitler {
  levels = [
    'Senior',
    'Senior Executive',
    'Professional',
    'Executive',
    'Junior',
    'Entry-level',
    'Principal',
    'Lieutenant',
    'Lead',
    'Chief',
    'Chief Executive',
    'Consulting',
  ]

  fields = [
    'Software',
    'Product',
    'Project',
    'Systems',
    'Mainframe',
    'Agile',
    'Open-source',
  ]

  subfields = [
    'Development',
    'Quality',
  ]

  specialties = [
    'Web',
    'Online',
    'Application',
    'Frontend',
    'Backend',
    'Architecture',
    'API',
    'Legacy Code',
    'Database',
    'Data',
    'Data-entry',
    'Interface',
    'UML',
    'Release',
    'Devops',
    'Operations',
    'Network',
    'IT',
    'Deployment',
    'Integration',
    'Maintenance',
    'Customer',
    'Infrastructure',
    'Sales',
    'Account',
    'Python',
    'Java',
    '.NET',
    'PHP',
    'Scala',
    'Ruby on Rails',
    'PL/SQL',
    'COBOL',
    'Mobile',
    'Embedded Systems',
    'Functional',
    'Documentation',
    'Pipeline',
  ]

  dayjobs = [
    'Engineer', 'Engineer', 'Engineer', 'Engineer',  // Weighted!
    'Developer', 'Developer', 'Developer', 'Developer',  // Yeah!
    'Monkey',
    'Architect',
    'Designer',
    'Coder',
    'Programmer',
    'Scientist',
    'Specialist',
    'Scrum Master',
    'Team Lead',
    'Investigator',
    'Tester',
    'Button-pusher',
    'Script Kiddie',
    'Intern',
    'Mentor',
    'Manager',
    'Analyst',
    'Admin',
    'Handler',
    'Maintainer',
    'Truther',
    'Director',
    'Consultant',
    'Contractor',
    'Advocate',
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
