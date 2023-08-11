var number = function(busStops){
  // Good Luck!
  let totalBoarding=0;
  let totalAlighting =0;
  busStops.map(([boarding,alighting]) =>{
   totalBoarding +=boarding;
    totalAlighting+=alighting;
   
    
  })
  return totalBoarding-totalAlighting;
}
