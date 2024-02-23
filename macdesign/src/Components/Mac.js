import React, { useState } from 'react'
import {AiFillApple} from 'react-icons/ai'
import {BsBatteryCharging} from 'react-icons/bs'
import {IoIosWifi} from 'react-icons/io'
import {GoSearch} from 'react-icons/go'
import control from '../Assessts/control-center-icon.png'
import siri from '../Assessts/siri-logo.png'
import disk from '../Assessts/disk-icon.png'
import Folder from '../Assessts/folder-icon.png'
import pdf from '../Assessts/pdf-icon.png'
import finder from '../Assessts/img1.png'
import clock from '../Assessts/img2.png'
import message from '../Assessts/img3.png'
import music from '../Assessts/img4.png'
import messager from '../Assessts/img5.png'
import gallery from '../Assessts/img6.png'
import contacts from '../Assessts/img7.png'
import calender from '../Assessts/img8.png'
import xray from '../Assessts/img9.png'
import video from '../Assessts/img10.png'
import map from '../Assessts/img11.png'
import notes from '../Assessts/img12.png'
import settings from '../Assessts/img13.png'
import notepad from '../Assessts/img14.png'
import bar from '../Assessts/img15.png'

import './Mac.css'
function Mac() {
  const[apples,setApples]=useState(false)
  
  const [finde,setFinde]=useState(false)
 
  const[edit,setEdit]=useState(false)
  
  const[go,setGo]=useState(false)
  
  const[view,setView]=useState(false)
  
  const[window,setWindow]=useState(false)
  
  const[help,setHelp]=useState(false)
  
  const[isfolder,setIsFolder]=useState()


  return (
    <div>
        <div className='background-image' onDoubleClick={()=>setIsFolder(null)}>
       <div className='d-flex justify-content-between align-items-center header p-2'>
       <div className='d-flex gap-4 px-2 ' >
        <div className='pt-1 '  onMouseEnter={()=>setApples(true)} onMouseLeave={()=>setApples(false)} ><AiFillApple size={25} style={{color:'white',display:'flex',alignItems:'center',cursor:'pointer',justifyContent:'center'}}  
       />
        {apples && (
        <div className='dropdown1 p-2'>
        <p className='apple'>About This Mac</p>
        <div className='line'></div>
        <p className='apple'>System Preferences</p>
        <p className='apple'>App Store</p>
        <div className='line'></div>
        <p className='apple'>Recent Items</p>
        <div className='line'></div>
        <p className='apple'>Force Quit</p>
        <div className='line'></div>
        <p className='apple'>Sleep</p>
        <p className='apple'>Restart</p>
        <p className='apple'>Shut Down</p>
        <div className='line'></div>
        <p className='apple'>Lock Screen</p>
        <p className='apple'>Log out Soroush...</p>
        </div>
       )}
        </div>
        
        <div className='color pt-2'   onMouseEnter={()=>setFinde(true)} onMouseLeave={()=>setFinde(false)} >Finder
        {finde &&(
        <div  className='dropdown2 p-2' >
        <p  className='finder'>About Finder</p>
        <div className='line'></div>
        <p  className='finder'>Preferences</p>
        <div className='line'></div>
        <p  className='finder'>Empty Trash</p>
        <div className='line'></div>
        <p  className='finder'>Services</p>
        <div className='line'></div>
        <p  className='finder'>Hide Finder</p>
        <p  className='finder'>Hide Others</p>
        <p  className='finder'>Show All</p>
               </div>
 )}
 </div>
        <div className='colors pt-2'  onMouseEnter={()=>setEdit(true)} onMouseLeave={()=>setEdit(false)} >Edit
        {edit &&(
   <div className='dropdown3 p-2'>
   <p className='edit'>About Edit</p>
   <div className='line'></div>
   <p className='edit'>Preferences</p>
  </div>
)}
</div>
        <div className='colors pt-2'  onMouseEnter={()=>setView(true)} onMouseLeave={()=>setView(false)}>View
        {view &&(
   <div className='dropdown4 p-2'>
   <p className='view'>About View</p>
   <div className='line'></div>
   <p className='view'>Preferences</p>
  </div>
)}
        </div>
        <div className='colors pt-2'  onMouseEnter={()=>setGo(true)} onMouseLeave={()=>setGo(false)}>Go
        {go &&(
   <div className='dropdown5 p-2'>
   <p className='go'>About Go</p>
   <div className='line'></div>
   <p className='go'>Preferences</p>
  </div>
)}
        </div>
        <div className='colors pt-2'  onMouseEnter={()=>setWindow(true)} onMouseLeave={()=>setWindow(false)}>Window
        {window &&(
  <div className='dropdown6 p-2'>
  <p className='window'>About Window</p>
  <div className='line'></div>
  <p className='window'>Preferences</p>
 </div>
)}
        </div>
        <div className='colors pt-2'   onMouseEnter={()=>setHelp(true)} onMouseLeave={()=>setHelp(false)}>Help
        {help &&(
   <div className='dropdown7 p-2'>
   <p className='help'>About Help</p>
   <div className='line'></div>
   <p className='help'>Preferences</p>
  </div>
)} 
        </div>
       </div>
       <div className='d-flex gap-4 px-2 '>
       <p className='color pt-3'><BsBatteryCharging size={20}/></p>
        <p className='color pt-3'><IoIosWifi size={20}/></p>
        <p className='color pt-3'><GoSearch size={20}/></p>
        <img src={control} alt='control' className='pt-3' width="20" height="35" style={{cursor:'pointer'}}/>
        <img src={siri} alt='sirilogo' className='pt-3' width="20" height="35" style={{cursor:'pointer'}}/>
        <p className='colors pt-3'>Go</p>
        <p className='colors pt-3'>Sat Sep 16</p>
        <p className='colors pt-3'>03:07 AM</p>
       </div>
       </div>
       





   


       <div className='images'  >
        <div className='d-flex flex-column gap-2' onClick={()=>setIsFolder(0)}>
        <div  className={` pb-1 folder ${isfolder===0 ? 'active':''}`} ><img src={disk} alt='disk' width="50" height="50"/></div>
        <div className={` p-2 text ${isfolder===0 ? 'texts':''}`}>Macinotosh HD</div>
        </div>
        <div  className='d-flex flex-column gap-2'  onClick={()=>setIsFolder(1)}>
        <div  className={` pb-1 folder ${isfolder===1 ? 'active':''}`} ><img src={Folder} alt='Folder'  width="50" height="50"/></div>
        <div className={` p-2 text ${isfolder===1 ? 'texts':''}`}>Gaint Sur</div>
        </div>
       <div  className='d-flex flex-column gap-2'  onClick={()=>setIsFolder(2)}>
       <div  className={` pb-1 folder ${isfolder===2 ? 'active':''}`} ><img src={pdf} alt='pdf' width="50" height="50"/></div>
        <div className={` p-2 text ${isfolder===2 ? 'texts':''}`} >Example.pdf</div>
       </div>
       </div>
       <div className='menus p-2 mb-3'>
        <div><img src={finder} alt="finder" className='photo'  width="50" height="50"/></div>
        <div><img src={clock} alt="clock"  className='photo' width="50" height="50"/></div>
        <div><img src={message} alt="message"  className='photo' width="50" height="50"/></div>
        <div><img src={music} alt="music"  className='photo'  width="50" height="50"/></div>
       <div><img src={messager} alt="messager"  className='photo'   width="50" height="50"/></div>
      <div><img src={gallery} alt="gallery"  className='photo' width="50" height="50"/></div>
        <div><img src={contacts} alt="contacts" className='photo' width="50" height="50"/></div>
      <div><img src={calender} alt="calender" className='photo' width="50" height="50"/></div>
        <div><img src={xray} alt="xray" className='photo' width="50" height="50"/></div>
        <div><img src={video} alt="video" className='photo' width="50" height="50"/></div>
        <div><img src={map} alt="map" className='photo' width="50" height="50"/></div>
    <div><img src={notes} alt="notes" className='photo' width="50" height="50"/></div>
        <div><img src={settings} alt="settings" className='photo' width="50" height="50"/></div>
        <div><img src={notepad} alt="notepad" className='photo' width="50" height="50"/></div>
        <div><img src={bar} alt="bar" className='photo' width="50" height="50"/></div>
       </div>
        </div>
      
    </div>
  )
}

export default Mac
