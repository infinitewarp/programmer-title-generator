from __future__ import print_function

from random import choice
from functools import partial

coin_toss = partial(choice, [True, False])

def generate_name():
    title_components = []

    if coin_toss():
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
        title_components.append(choice(levels))

    if coin_toss():
        fields = [
            'Software',
            'Product',
            'Project',
            'Systems',
            'Mainframe',
            'Agile',
            'Open-source',
        ]
        title_components.append(choice(fields))

    if coin_toss():
        subfields = [
            'Development',
            'Quality',
        ]
        title_components.append(choice(subfields))

    if coin_toss() or coin_toss():
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
        title_components.append(choice(specialties))

    dayjobs = [
        'Engineer', 'Engineer', 'Engineer', 'Engineer',  # Weighted!
        'Developer', 'Developer', 'Developer', 'Developer',  # Yeah!
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
    title_components.append(choice(dayjobs))

    if coin_toss() and coin_toss():
        suffixes = [
            'II',
            'III',
            'IV',
            'CSM',  # Certified Scrum Master
            'CCNA',  # Cisco Certified Network Associate
            'MCSE',  # Microsoft Certified Solutions Expert
            'OCPJP',  # Oracle Certified Professional Java Programmer
            'PMP',  # Project Manager Professional
        ]
        title_components.append(choice(suffixes))

    return ' '.join(title_components)


if __name__ == '__main__':
    for _ in range(1, 50):
        print(generate_name())
