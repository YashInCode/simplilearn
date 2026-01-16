import { History, Workflow, BarChart3, ShieldCheck, CircuitBoard, Rocket } from "lucide-react";
import robLauber from '@/assets/images/speakers/Rob Lauber.png';
import krishnaKumar from '@/assets/images/speakers/Krishna Kumar.png';
import sudigtoMitra from '@/assets/images/speakers/Sudipto Mitra.png';

export const eventAgendaData = [
  {
    title: 'Welcome & Opening',
    speaker: 'Sudipto Mitra, CRO Simplilearn',
    description: 'Why capability-building is now a board-level issue and what\'s changing in the workforce landscape.',
  },
  {
    title: 'Keynote: What Enterprise Leaders Are Seeing on the Ground',
    speaker: 'Rob Lauber, Former CLO McDonald\'s',
    description: 'A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries.',
  },
  {
    title: 'Lunch & Executive Conversation',
    speaker: 'Industry Experts Invited',
    description: 'What large enterprise talent ecosystems are learning about capability-building at scale.',
  },
];

export const featureSpeakersData = [
  {
    id: 1,
    name: 'Rob Lauber',
    bio: 'Rob Lauber is a global workforce and capability-building leader with over 25 years of experience helping organizations prepare leaders and frontline teams for change. Most recently, he served as SVP and Chief Learning Officer at McDonald\'s, leading learning and development across 37,000+ restaurants worldwide. His perspective is especially relevant as organizations rethink leadership and capability models in the age of AI.',
    image: robLauber
  },
  {
    id: 2,
    name: 'Krishna Kumar',
    bio: 'Krishna Kumar is the Founder and CEO of Simplilearn, working closely with enterprises navigating workforce transformation driven by AI and digital change. At the center of the learning and skills ecosystem, he brings a unique perspective on how roles, leadership expectations, and capabilities are evolving across industries. Through direct engagement with enterprise leaders and education partners, he sees what scales, and what doesn\'t, in building workforce readiness for AI era, offering a cross-enterprise view of the priorities shaping workforce strategy today.',
    image: krishnaKumar
  },
  {
    id: 3,
    name: 'Sudipto Mitra',
    bio: 'Sudipto Mitra is a senior transformation and growth leader with over 20 years of experience helping enterprises navigate large-scale change across technology, operations, and talent. As Chief Revenue Officer at Simplilearn, he works with executive teams to address workforce capability gaps as AI reshapes roles and operating models. He previously held leadership roles at Accenture, IBM Consulting, and WorkFusion.',
    image: sudigtoMitra
  },
];

export const takeawaysData = [
  'A clear view of the leadership & workforce capabilities that will matter most over the next 24-36 months.',
  'Insights from high-scale operating environments including the former CLO of McDonald\'s on what truly scales and what breaks under pressure.',
  'Signals for where capability gaps may already be forming in your organization.',
  'Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems at scale.',
  'Actionable insights you can take straight into your next exec meeting.',
];

export const exploringFeaturesData = [
  {
    id: 1,
    icon: History,
    title: 'Skill Decay',
    description: 'every 2 -3 years fater for technical skill',
  },
  {
    id: 2,
    icon: Workflow,
    title: 'Manager Role Shift',
    description: 'orchestrating people + AI agents',
  },
  {
    id: 3,
    icon: BarChart3,
    title: 'Leaders + AI CoPilots',
    description: 'requires sensemaking and systerms thinking',
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: 'Frontline Capability',
    description: 'now depends on digital fluency',
  },
  {
    id: 5,
    icon: CircuitBoard,
    title: 'Core Human Capabiliites',
    description: 'analytical reasoning nad scenario planning',
  },
  {
    id: 6,
    icon: Rocket,
    title: 'Winning Organizations',
    description: 'predict skills ahead of demand',
  },
];
