import React from 'react';
import Header from './components/Header';
import StudentLists from './components/StudentLists';
import DirectoryStats from './components/DirectoryStats';
import Footer from './components/Footer';

const activeStudents = [
  { id: 'A1', name: 'Sahil', rollNumber: 'A1', course: 'BCA', email: 'sahil@example.com', skills: ['JavaScript','React','HTML'], isActive: true },
  { id: 'A2', name: 'Abbas', rollNumber: 'A2', course: 'BBA', email: 'abbas@example.com', skills: ['Communication','Management'], isActive: true },
  { id: 'A3', name: 'Adi', rollNumber: 'A3', course: 'B.Tech', email: 'adi@example.com', skills: ['C++','Data Structures'], isActive: true },
  { id: 'A4', name: 'Fazil', rollNumber: 'A4', course: 'BA', email: 'Fazil@example.com', skills: ['Photoshop','HTML','CSS'], isActive: true }
];

const alumniStudents = [
  { id: 'L1', name: 'Shabab', rollNumber: 'L1', course: 'MBA', email: 'shabab@example.com', skills: ['Leadership','Finance'], isActive: false },
  { id: 'L2', name: 'Faisal', rollNumber: 'L2', course: 'MCA', email: 'faisal@example.com', skills: ['React','Node.js'], isActive: false },
  { id: 'L3', name: 'Suhaif', rollNumber: 'L3', course: 'M.Tech', email: 'suhaif@example.com', skills: ['Machine Learning','Python'], isActive: false }
];

const allStudents = [...activeStudents, ...alumniStudents];

export default function App(){
  return (
    <div className="container page">
      <Header title="Student Directory 2025" subtitle="Full Stack Development Batch" author="Alfouz" />

      <DirectoryStats allStudents={allStudents} activeCount={activeStudents.length} alumniCount={alumniStudents.length} />

      <StudentLists activeStudents={activeStudents} alumniStudents={alumniStudents} />

      <Footer institute="ABC Institute of Technology — Full Stack Development" contact="abc@gmail.com" year={2025} />
    </div>
  );
}
