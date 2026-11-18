import { Users, LineChart, GraduationCap, Scale, Shirt } from 'lucide-react'

export const CONTACT = {
  phones: ['+228 93 38 77 77', '+228 96 05 78 78'],
  whatsapp: '22893387777',
  address: 'VILLA KISAW 61 Rue des cerfeuils, 13BP 310, Hedzranawoé (von de WAGES), Lomé – Togo',
  addressShort: 'Hedzranawoé, Lomé – Togo',
  email: 'emploiehr@gmail.com',
  agrement: 'Agrément N° 05/22 MFPTDS/CAB/SG/DGT',
}

export const SERVICES = [
  {
    slug: 'recrutement',
    title: 'Recrutement',
    Icon: Users,
    short: 'Trouvez les talents idéaux pour votre entreprise.',
    intro:
      "EHR sélectionne pour vous les meilleurs profils de l'hôtellerie et de la restauration : du personnel opérationnel aux cadres de direction.",
    points: [
      'Recrutement de personnel de salle, cuisine, réception et étages',
      'Chasse de cadres et managers',
      'Présélection, tests et entretiens',
      'Placement temporaire et permanent',
      'Suivi d’intégration des candidats',
    ],
  },
  {
    slug: 'consulting',
    title: 'Consulting',
    Icon: LineChart,
    short: 'Optimisez vos opérations grâce à nos experts.',
    intro:
      "Nos consultants accompagnent hôtels, restaurants et établissements de loisirs dans l'amélioration de leur organisation, de leur rentabilité et de la qualité de leur service.",
    points: [
      'Audit organisationnel et diagnostic de performance',
      'Mise en place de procédures et de standards de service',
      "Accompagnement à l'ouverture de nouveaux établissements",
      'Optimisation des coûts et de la gestion des stocks',
      'Amélioration de l’expérience client',
    ],
  },
  {
    slug: 'recyclage-et-formation',
    title: 'Recyclage et formation',
    Icon: GraduationCap,
    short: 'Renforcez les compétences de vos équipes.',
    intro:
      'Des formations pratiques et des sessions de recyclage pour maintenir vos équipes au meilleur niveau des standards internationaux.',
    points: [
      'Service en salle et techniques de bar',
      'Hygiène et sécurité alimentaire',
      'Accueil, réception et relation client',
      'Housekeeping et gestion des étages',
      'Management et encadrement d’équipe',
    ],
  },
  {
    slug: 'conseil-juridique',
    title: 'Conseil juridique',
    Icon: Scale,
    short: 'Sécurisez vos relations de travail.',
    intro:
      "Nous vous conseillons sur l'ensemble des questions juridiques liées à l'emploi dans le secteur de l'hôtellerie et de la restauration.",
    points: [
      'Rédaction et révision de contrats de travail',
      'Conformité avec le code du travail togolais',
      'Gestion des conflits et procédures disciplinaires',
      'Règlement intérieur et obligations sociales',
    ],
  },
  {
    slug: 'vente-de-tenues-specialisees',
    title: 'Vente de tenues spécialisées',
    Icon: Shirt,
    short: 'Équipez vos équipes avec élégance.',
    intro:
      'Des tenues professionnelles de qualité, adaptées à chaque métier de l’hôtellerie et de la restauration.',
    points: [
      'Vestes et tabliers de cuisine',
      'Uniformes de service en salle et de bar',
      'Tenues de réception et de housekeeping',
      'Personnalisation aux couleurs de votre établissement',
    ],
  },
]

export const PARTNERS = [
  { name: 'TAV', src: '/images/partenaires/TAV.png' },
  { name: '2F', src: '/images/partenaires/2F.png' },
  { name: 'Miadjoe', src: '/images/partenaires/miadjoe.png' },
  { name: 'Afrik Club', src: '/images/partenaires/afrikclub.png' },
  { name: 'CFOSTA', src: '/images/partenaires/CFOSTA.png' },
  { name: 'Big Easy', src: '/images/partenaires/big-easy.png' },
  { name: 'Oyra', src: '/images/partenaires/oyra.png' },
  { name: 'Partenaire', src: '/images/partenaires/whatsapp.jpg' },
]
