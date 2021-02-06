import React from 'react';

import WhoAmI from '../WhoAmI/WhoAmI';
import Skills from '../Skills/Skills';
import ProjectComp from '../Projects/ProjectsComp';
import OtherPassions from '../OtherPassions/OtherPassions';

function Splash() {
  return (
    <>
      <p>splash page</p>
      <WhoAmI />
      <Skills />
      <ProjectComp />
      <OtherPassions />
    </>
  );
}
export default Splash;
