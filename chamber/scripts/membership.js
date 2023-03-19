function showMemberList(level){
    document.getElementById("listOfBenefits").innerHTML = "";
    if(level === 'gold'){
      document.getElementById("member-level").innerHTML = 'GOLD MEMBER';
      showBenefits(level);
    } else if(level === 'silver'){
      document.getElementById("member-level").innerHTML = 'SILVER MEMBER';
      showBenefits(level);
    } else if(level === 'bronze'){
      document.getElementById("member-level").innerHTML = 'BRONZE MEMBER';
      showBenefits(level);
    } else {
      document.getElementById("member-level").innerHTML = 'NP MEMBER';
      showBenefits(level);
    }
  }
  
  function showAllowedBenefit(benefit){
    let span = document.createElement('span');
    span.classList.add('benefit');
    let childSpan = document.createElement('span');
    span.append(childSpan)
    span.append(benefit);
    document.getElementById("listOfBenefits").append(span)
  }
  
  function showBenefits(level){
    const benefits = ['Recognition', 'Podcast Spotlight', 'Quartely Newsletter', 'Present Chamber Meeting', 'Unlimited copy services', 'Social Media Spotlight', 'Ribbon cutting', 'Chamber provided mixer to be hosted at your location'];
    if(level==='gold'){
      const allowed = ['Recognition', 'Podcast Spotlight', 'Quartely Newsletter', 'Present Chamber Meeting', 'Unlimited copy services', 'Social Media Spotlight', 'Ribbon cutting', 'Chamber provided mixer to be hosted at your location'];
      benefits.forEach(benefit=>{
        if(allowed.includes(benefit)){
          showAllowedBenefit(benefit);
        }
      })
    }else if(level==='silver'){
      const allowed = ['Recognition', 'Podcast Spotlight', 'Present Chamber Meeting', 'Unlimited copy services', 'Ribbon cutting', 'Chamber provided mixer to be hosted at your location'];
      benefits.forEach(benefit=>{
        if(allowed.includes(benefit)){
          showAllowedBenefit(benefit);
        }
      })
    }else if(level==='bronze'){
      const allowed = ['Recognition', 'Present Chamber Meeting', 'Ribbon cutting', 'Chamber provided mixer to be hosted at your location'];
      benefits.forEach(benefit=>{
        if(allowed.includes(benefit)){
          showAllowedBenefit(benefit);
        }
      })
    } else {
      const allowed = ['Recognition', 'Ribbon cutting'];
      benefits.forEach(benefit=>{
        if(allowed.includes(benefit)){
          showAllowedBenefit(benefit);
        }
      })
    }
  }
  
  document.getElementById("membershipLevel").addEventListener("change", ()=>{
    document.getElementById("membership-list").classList.add("flex-box");
    let level = document.getElementById("membershipLevel").value;
    showMemberList(level);
  });
  