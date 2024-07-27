const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_56_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA0LFxuICAgICAgICA4MixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYzLFxuICAgICAgICA1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgwLFxuICAgICAgICA2OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDg1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NixcbiAgICAgICAgNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDcwLFxuICAgICAgICAxODQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDksXG4gICAgICAgIDQ3LFxuICAgICAgICA5MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyOCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDksXG4gICAgICAgIDQ2LFxuICAgICAgICAyNixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDM2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA4NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgODgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQxLFxuICAgICAgICAxODgsXG4gICAgICAgIDczLFxuICAgICAgICA2NixcbiAgICAgICAgNDAsXG4gICAgICAgIDU2LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQzLFxuICAgICAgICA3OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNixcbiAgICAgICAgMjksXG4gICAgICAgIDU1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDYxLFxuICAgICAgICAxNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDczLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5bzBUZzZyMCtTUE4zTy93NHFqVitUellBSE41eVNtcHBya3VCSnlkTElnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwbVdXQ05DMFNfR3ZzcUJ3eXcxVEZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcImFkN2Y0ODY4LTRlNjgtNDBiMi05MGExLTk2NTJhYWMxZjEwNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTMsXG4gICAgICAzOCxcbiAgICAgIDE5MyxcbiAgICAgIDk0LFxuICAgICAgOTAsXG4gICAgICAxMjAsXG4gICAgICAxMjEsXG4gICAgICAxNzYsXG4gICAgICA5MyxcbiAgICAgIDEwMyxcbiAgICAgIDgsXG4gICAgICA3NCxcbiAgICAgIDI1NCxcbiAgICAgIDEyNCxcbiAgICAgIDIyNyxcbiAgICAgIDI0MyxcbiAgICAgIDIyNCxcbiAgICAgIDIwMixcbiAgICAgIDE4OSxcbiAgICAgIDE1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MixcbiAgICAgIDE4OSxcbiAgICAgIDEyNixcbiAgICAgIDIwNyxcbiAgICAgIDE2NixcbiAgICAgIDE4MyxcbiAgICAgIDk5LFxuICAgICAgMTg4LFxuICAgICAgMSxcbiAgICAgIDg1LFxuICAgICAgMTczLFxuICAgICAgMTcyLFxuICAgICAgNjUsXG4gICAgICA5NixcbiAgICAgIDIxNCxcbiAgICAgIDIyOCxcbiAgICAgIDEwOSxcbiAgICAgIDExMCxcbiAgICAgIDIyMyxcbiAgICAgIDI1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWUkZKQTYzVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjEyNjcxNjQ4OTQ3OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2ZlvCdma7wnZmk8J2ZqvCdmZcg77y477yVXCIsXG4gICAgXCJsaWRcIjogXCIxNTk1MTk5NTA3Nzg1NjY6MTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWFIc05NQ0VKaVNsclVHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ0K3ZwbWlFMjJrZ3BXS0FZdFBxVjBxNWVQeFpvUEhkZTZnOWxKK0tNUlNBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInhZbTZMZ1JqTnI0Vi8raldVemc1OG5SaU1USGNIWXFKNFdTS0p5V0toMW1ZamkvVy8yQnpqbzc5TFZaRTBNZDc5Snk1aGJBdjNZR2duTUNjNGEwZ0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImVqZ3JzbkRUY0IyTDVtbkhKaUFJcTh1bjIxdEFsaTdBT0hNVFpCeUxPOHEzQTJSRk5xbms4cnBHV0l2VCtsUGZvNzl2Z3MrcUMwb01Ga0VFSlAzWWhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIxMjY3MTY0ODk0NzoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjEyNDU3MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUwvWlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTC9aLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
