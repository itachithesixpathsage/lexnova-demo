import { PracticeArea } from '../types';

export const practiceAreas: PracticeArea[] = [
  {
    id: 'criminal-defense',
    title: 'Criminal Defense',
    description: 'Aggressive defense strategies for all criminal charges, from misdemeanors to serious felonies. We protect your rights and fight for your freedom.',
    icon: 'Shield',
    services: [
      'DUI & DWI Defense',
      'Drug Crimes',
      'White Collar Crimes',
      'Violent Crimes',
      'Federal Crimes',
      'Appeals & Post-Conviction Relief'
    ]
  },
  {
    id: 'civil-litigation',
    title: 'Civil Litigation',
    description: 'Comprehensive civil litigation services to resolve disputes and protect your interests in court or through strategic negotiation.',
    icon: 'Scale',
    services: [
      'Personal Injury',
      'Business Disputes',
      'Employment Law',
      'Contract Disputes',
      'Real Estate Litigation',
      'Insurance Claims'
    ]
  },
  {
    id: 'corporate-law',
    title: 'Corporate Law',
    description: 'Strategic legal counsel for businesses of all sizes, from startups to multinational corporations, ensuring compliance and growth.',
    icon: 'Building',
    services: [
      'Business Formation',
      'Mergers & Acquisitions',
      'Securities Law',
      'Corporate Governance',
      'Compliance',
      'Contract Negotiation'
    ]
  },
  {
    id: 'family-law',
    title: 'Family Law',
    description: 'Compassionate legal representation for sensitive family matters, always prioritizing the best interests of children and families.',
    icon: 'Heart',
    services: [
      'Divorce & Separation',
      'Child Custody',
      'Child Support',
      'Spousal Support',
      'Adoption',
      'Domestic Violence Protection'
    ]
  }
];