const _0x3770b7=_0x48a8;(function(_0x5f1987,_0x299e9e){const _0x527bf1=_0x48a8,_0x2b058e=_0x5f1987();while(!![]){try{const _0x26fa64=-parseInt(_0x527bf1(0x187))/0x1+-parseInt(_0x527bf1(0x197))/0x2+parseInt(_0x527bf1(0x160))/0x3*(parseInt(_0x527bf1(0x157))/0x4)+-parseInt(_0x527bf1(0x168))/0x5+parseInt(_0x527bf1(0x13d))/0x6*(parseInt(_0x527bf1(0x140))/0x7)+-parseInt(_0x527bf1(0x190))/0x8+parseInt(_0x527bf1(0x178))/0x9;if(_0x26fa64===_0x299e9e)break;else _0x2b058e['push'](_0x2b058e['shift']());}catch(_0x454786){_0x2b058e['push'](_0x2b058e['shift']());}}}(_0x47f9,0x8a235));const opentype=require(_0x3770b7(0x191)),convertPaths=require(_0x3770b7(0x170)),{parse,stringify}=require(_0x3770b7(0x147)),fs=require('fs'),shapes=[_0x3770b7(0x18d),_0x3770b7(0x185),'ellipse',_0x3770b7(0x18c),_0x3770b7(0x16b),_0x3770b7(0x15f)];var defaultFont=_0x3770b7(0x19b),defaultFontPath=require[_0x3770b7(0x192)](_0x3770b7(0x143)),defaultFontSize=0x10,regex_base64=_0x3770b7(0x181),regex_svg=/(<svg)([^<]*|[^>]*)/g,utf_reg=/^((?=[a-z 0-9 -_ +&!@#$%^&*()�,.?":{}|<>\']).)+$/i;exports[_0x3770b7(0x15d)]=async function(_0x3f7860){const _0x14f542=_0x3770b7;var _0x3122df;if(Buffer[_0x14f542(0x184)](_0x3f7860[_0x14f542(0x189)])==!![])_0x3122df=_0x3f7860[_0x14f542(0x189)]['toString'](_0x14f542(0x195));else{if(new RegExp('^'+regex_base64+'$','gi')[_0x14f542(0x14c)](_0x3f7860[_0x14f542(0x189)])==!![])_0x3122df=Buffer[_0x14f542(0x177)](_0x3f7860[_0x14f542(0x189)],_0x14f542(0x18a))[_0x14f542(0x17b)](_0x14f542(0x195));else{if(new RegExp(regex_svg)[_0x14f542(0x14c)](_0x3f7860['loadAs'])==!![])_0x3122df=_0x3f7860[_0x14f542(0x189)];else _0x3122df=fs[_0x14f542(0x14d)](_0x3f7860[_0x14f542(0x189)],_0x14f542(0x195));}}_0x3f7860[_0x14f542(0x18e)]&&_0x3f7860[_0x14f542(0x142)]&&(_0x3f7860[_0x14f542(0x18e)][_0x14f542(0x162)]()!=''&&_0x3f7860[_0x14f542(0x142)][_0x14f542(0x162)]()!=''&&(defaultFont=_0x3f7860[_0x14f542(0x18e)],defaultFontPath=_0x3f7860[_0x14f542(0x142)]));_0x3f7860[_0x14f542(0x155)]&&(_0x3f7860[_0x14f542(0x155)][_0x14f542(0x17b)]()[_0x14f542(0x162)]()!=''&&(defaultFontSize=_0x3f7860[_0x14f542(0x155)]));var _0x15d035=(_0x3122df[_0x14f542(0x18f)](/<text/g)||[])[_0x14f542(0x141)];Array[_0x14f542(0x177)]({'length':_0x15d035})[_0x14f542(0x145)]((_0x1c6ae1,_0xcc1112)=>{const _0xc56caf=_0x14f542;_0x3122df=_0x3122df[_0xc56caf(0x14b)](_0xc56caf(0x175),_0xc56caf(0x194)+_0xcc1112+'\x20'),_0x3122df=_0x3122df[_0xc56caf(0x14b)](_0xc56caf(0x149),_0xc56caf(0x186)+_0xcc1112+'>');});const _0x4cb8e4=Array(_0x15d035)[_0x14f542(0x163)]()[_0x14f542(0x176)](async(_0x24e3f2,_0x568fcb)=>{const _0x431adb=_0x14f542;let _0x4caac4=_0x3122df[_0x431adb(0x16f)]('<text'+_0x568fcb+'')[_0x431adb(0x19a)]()[_0x431adb(0x16f)](_0x431adb(0x186)+_0x568fcb+'>')[0x0][_0x431adb(0x162)](),_0x349bb7,_0x5cca01,_0xfaadbd,_0x3b1aa8=0x0,_0x311689=0x0;if(_0x4caac4[_0x431adb(0x144)]('font-family'))_0x5cca01=_0x4caac4[_0x431adb(0x16f)](_0x431adb(0x16c))[_0x431adb(0x19a)]()[_0x431adb(0x16f)]('\x22')[0x0][_0x431adb(0x162)]();else{if(_0x4caac4[_0x431adb(0x144)](_0x431adb(0x15c))){var _0x14544c=_0x4caac4[_0x431adb(0x16f)](_0x431adb(0x172))[_0x431adb(0x19a)]()[_0x431adb(0x16f)]('\x22')[0x0][_0x431adb(0x162)]();_0x5cca01=_0x3122df['split']('.'+_0x14544c)['pop']()[_0x431adb(0x16f)]('}')[0x0],_0x5cca01=_0x5cca01[_0x431adb(0x16f)](_0x431adb(0x188))['pop']()[_0x431adb(0x16f)](';')[0x0][_0x431adb(0x162)]()[_0x431adb(0x14b)](':','');}}if(_0x4caac4[_0x431adb(0x144)](_0x431adb(0x13e)))_0xfaadbd=_0x4caac4[_0x431adb(0x16f)](_0x431adb(0x14e))[_0x431adb(0x19a)]()[_0x431adb(0x16f)]('\x22')[0x0][_0x431adb(0x162)]();else _0xfaadbd=defaultFontSize;if(!_0x4caac4[_0x431adb(0x144)](_0x431adb(0x182))){_0x349bb7=_0x4caac4[_0x431adb(0x16f)]('>')[0x1][_0x431adb(0x162)]();if(_0x4caac4[_0x431adb(0x144)](_0x431adb(0x169)))_0x3b1aa8=_0x4caac4[_0x431adb(0x16f)](_0x431adb(0x169))[_0x431adb(0x19a)]()[_0x431adb(0x16f)]('\x22')[0x0][_0x431adb(0x162)]();else{if(_0x4caac4[_0x431adb(0x144)](_0x431adb(0x150)))_0x3b1aa8=_0x4caac4[_0x431adb(0x16f)](_0x431adb(0x150))[_0x431adb(0x19a)]()['split']('\x22')[0x0]['trim']();}if(_0x4caac4[_0x431adb(0x144)](_0x431adb(0x17d)))_0x311689=_0x4caac4[_0x431adb(0x16f)](_0x431adb(0x17d))['pop']()['split']('\x22')[0x0][_0x431adb(0x162)]();else{if(_0x4caac4[_0x431adb(0x144)](_0x431adb(0x159)))_0x311689=_0x4caac4['split'](_0x431adb(0x159))[_0x431adb(0x19a)]()[_0x431adb(0x16f)]('\x22')[0x0][_0x431adb(0x162)]();}}else{_0x349bb7=_0x4caac4[_0x431adb(0x16f)]('<tspan\x20')[_0x431adb(0x19a)]()['split'](_0x431adb(0x15b))[0x0],_0x349bb7=_0x349bb7['split']('>')[0x1];if(_0x4caac4[_0x431adb(0x144)]('x=\x22'))_0x3b1aa8=_0x4caac4['split']('x=\x22')[_0x431adb(0x19a)]()[_0x431adb(0x16f)]('\x22')[0x0][_0x431adb(0x162)]();else{if(_0x4caac4[_0x431adb(0x144)](_0x431adb(0x150)))_0x3b1aa8=_0x4caac4[_0x431adb(0x16f)](_0x431adb(0x150))[_0x431adb(0x19a)]()['split']('\x22')[0x0][_0x431adb(0x162)]();}if(_0x4caac4[_0x431adb(0x144)](_0x431adb(0x17d)))_0x311689=_0x4caac4[_0x431adb(0x16f)](_0x431adb(0x17d))[_0x431adb(0x19a)]()[_0x431adb(0x16f)]('\x22')[0x0][_0x431adb(0x162)]();else{if(_0x4caac4[_0x431adb(0x144)](_0x431adb(0x159)))_0x311689=_0x4caac4[_0x431adb(0x16f)](_0x431adb(0x159))[_0x431adb(0x19a)]()[_0x431adb(0x16f)]('\x22')[0x0][_0x431adb(0x162)]();}let _0xe71a6b=_0x4caac4[_0x431adb(0x16f)](_0x431adb(0x182))[_0x431adb(0x19a)]()[_0x431adb(0x16f)]('>')[0x0];_0x4caac4=_0x4caac4[_0x431adb(0x14b)](_0x431adb(0x182)+_0xe71a6b+'>',''),_0x4caac4=_0x4caac4['replace'](_0x431adb(0x15b),''),_0x3122df=_0x3122df[_0x431adb(0x14b)](_0x431adb(0x182)+_0xe71a6b+'>',''),_0x3122df=_0x3122df[_0x431adb(0x14b)](_0x431adb(0x15b),'');}try{_0x349bb7=_0x349bb7['trim'](),_0x349bb7=_0x349bb7['replace'](/amp;/g,'')[_0x431adb(0x14b)](/&lt;/g,'<')['replace'](/&gt;/g,'>')[_0x431adb(0x14b)](/&quot;/g,'\x22')[_0x431adb(0x14b)](/&#39;/g,'\x27')[_0x431adb(0x14b)](/&amp;/g,'&')['replace'](/&apos;/g,'\x27');}catch(_0x30ec56){}let _0x266cdd=/font-family="(.+?)"|font-size="(.+?)"|font-weight="(.+?)"/g;_0x4caac4[_0x431adb(0x18f)](_0x266cdd)?_0x4caac4=_0x4caac4[_0x431adb(0x14b)](_0x266cdd,''):null;var _0x56a641;_0x349bb7=_0x349bb7['replaceAll']('</tspan','');if(_0x349bb7[_0x431adb(0x162)]()[_0x431adb(0x141)]>0x0){if(_0x5cca01==_0x431adb(0x17a)||utf_reg['test'](_0x349bb7)==![])try{_0x56a641=require[_0x431adb(0x192)](_0x431adb(0x16a));}catch(_0x2f215a){_0x5cca01=defaultFont,_0x56a641=defaultFontPath;}else{if(_0x5cca01){if(_0x5cca01[_0x431adb(0x144)](','))_0x5cca01=_0x5cca01[_0x431adb(0x16f)](',')[0x0]['trim']();}_0x56a641=_0x5cca01?await fetchFont(_0x5cca01):null;if(!_0x56a641)try{[_0x5cca01,_0x56a641]=await loadGoogleFont(_0x5cca01,_0x56a641),addFont(_0x5cca01,_0x56a641);}catch(_0x20bd38){_0x5cca01=defaultFont,_0x56a641=defaultFontPath;}}}if(_0x349bb7[_0x431adb(0x162)]()[_0x431adb(0x141)]>0x0){const _0x393dfa={'line':_0x349bb7,'x':_0x3b1aa8,'y':_0x311689,'font':_0x56a641,'size':_0xfaadbd},_0x4851fb=await TexttoPath(_0x393dfa);_0x4caac4=_0x4caac4[_0x431adb(0x162)]()['replace'](_0x349bb7,''),_0x4caac4='d=\x22'+_0x4851fb+'\x22\x20'+_0x4caac4;const _0x3e0a1f=_0x3122df[_0x431adb(0x16f)](_0x431adb(0x194)+_0x568fcb+'')[_0x431adb(0x19a)]()[_0x431adb(0x16f)]('</text'+_0x568fcb+'>')[0x0][_0x431adb(0x162)]();_0x3122df=_0x3122df['replace'](_0x431adb(0x194)+_0x568fcb+'\x20'+_0x3e0a1f,_0x431adb(0x180)+_0x4caac4)[_0x431adb(0x14b)](_0x431adb(0x186)+_0x568fcb+'>',_0x431adb(0x153));}return;});await Promise[_0x14f542(0x165)](_0x4cb8e4);try{for(var _0x2f6265=0x0;_0x2f6265<shapes[_0x14f542(0x141)];_0x2f6265++){_0x3122df[_0x14f542(0x144)]('<'+shapes[_0x2f6265]+'\x20')&&(_0x3122df=await shapesToPath(_0x3122df,shapes[_0x2f6265]));}}catch(_0x3263e0){}if(_0x3f7860[_0x14f542(0x17c)]['toLowerCase']()==_0x14f542(0x151))return Buffer[_0x14f542(0x177)](_0x3122df,'utf8');else{if(_0x3f7860[_0x14f542(0x17c)][_0x14f542(0x196)]()=='base64')return new Buffer[(_0x14f542(0x177))](_0x3122df)[_0x14f542(0x17b)](_0x14f542(0x18a));else{if(_0x3f7860[_0x14f542(0x17c)]['toLowerCase']()==_0x14f542(0x18b)||_0x3f7860['saveAs']['toLowerCase']()==_0x14f542(0x195))return _0x3122df;else{fs['writeFileSync'](_0x3f7860[_0x14f542(0x17c)],_0x3122df);return;}}}};async function shapesToPath(_0x493bf6,_0x2d2762){return new Promise(async function(_0x230219,_0x3c5427){const _0x615136=_0x48a8;var _0x5bfbcf=new RegExp('<'+_0x2d2762,'g'),_0x45c531=(_0x493bf6[_0x615136(0x18f)](_0x5bfbcf)||[])[_0x615136(0x141)];for(var _0x4d6f52=0x0;_0x4d6f52<_0x45c531;_0x4d6f52++)_0x493bf6=_0x493bf6[_0x615136(0x14b)]('<'+_0x2d2762+'\x20','<'+_0x2d2762+_0x4d6f52+'\x20');for(var _0x4d6f52=0x0;_0x4d6f52<_0x45c531;_0x4d6f52++){let _0x3b7b78=_0x493bf6[_0x615136(0x16f)]('<'+_0x2d2762+_0x4d6f52+'')[_0x615136(0x19a)]()['split']('/>')[0x0]['trim']();_0x3b7b78='<'+_0x2d2762+'\x20'+_0x3b7b78+'/>';let _0x42c2e9=await toJSON(_0x3b7b78);_0x42c2e9=_0x42c2e9[_0x615136(0x15e)][0x0];const _0x314c98=await convertPaths(_0x42c2e9);_0x493bf6=_0x493bf6[_0x615136(0x14b)]('<'+_0x2d2762+_0x4d6f52,_0x615136(0x17e)+_0x314c98+'\x22');}_0x230219(_0x493bf6);});}async function toJSON(_0x54e5ba){return new Promise(function(_0x36e40f,_0x5396ee){const _0x2fb354=_0x48a8;parse(_0x2fb354(0x14f)+_0x54e5ba+_0x2fb354(0x166))[_0x2fb354(0x174)](_0xd8709d=>{_0x36e40f(_0xd8709d);});});}async function loadGoogleFont(_0x2570e1,_0x2d6621){return new Promise(function(_0x48de51,_0x552321){const _0x5ef474=_0x48a8,_0x3b1265=require(_0x5ef474(0x152));let _0x59e3d8='https://github.com/google/fonts/blob/main/ofl/'+_0x2570e1[_0x5ef474(0x158)]('\x20','')[_0x5ef474(0x196)]()+'/'+_0x2570e1[_0x5ef474(0x158)]('\x20','')+_0x5ef474(0x16e);_0x3b1265[_0x5ef474(0x173)]({'uri':_0x59e3d8,'encoding':null},async function(_0x20f65f,_0x544566,_0x58b0e3){const _0x3ed6d3=_0x5ef474;if(!_0x20f65f&&_0x544566[_0x3ed6d3(0x156)]==0xc8){var _0x51112b=_0x3ed6d3(0x193);if(fs[_0x3ed6d3(0x148)](_0x51112b))_0x51112b=_0x51112b+_0x3ed6d3(0x15a);else _0x51112b='/google_fonts';if(!fs[_0x3ed6d3(0x148)](_0x51112b))fs[_0x3ed6d3(0x19c)](_0x51112b,0x1e4);_0x2d6621=_0x51112b+'/'+_0x2570e1[_0x3ed6d3(0x158)]('\x20','')[_0x3ed6d3(0x196)]()+_0x3ed6d3(0x13f),fs['writeFileSync'](_0x2d6621,_0x58b0e3,_0x3ed6d3(0x183)),_0x48de51([_0x2570e1,_0x2d6621]);}else _0x552321(_0x20f65f);});});}async function TexttoPath(_0x58afe6){const _0x39ea61=_0x3770b7,_0x31281d=opentype[_0x39ea61(0x198)](_0x58afe6[_0x39ea61(0x18e)]),_0x498ef3={'kerning':!![]},_0x1d3e75=_0x31281d[_0x39ea61(0x199)](_0x58afe6[_0x39ea61(0x18c)],Number(_0x58afe6['x']),Number(_0x58afe6['y']),Number(_0x58afe6[_0x39ea61(0x16d)]),_0x498ef3),_0x4a6ea6=_0x1d3e75['toPathData'](0x2);return _0x4a6ea6;}async function fetchFont(_0x4ce82c){const _0x28ace2=_0x3770b7,_0x2ce4ab=require[_0x28ace2(0x192)](_0x28ace2(0x17f)),_0x51b8a7=JSON[_0x28ace2(0x164)](fs[_0x28ace2(0x14d)](_0x2ce4ab));let _0xb27ffe=![];var _0x2f09fc;return Object[_0x28ace2(0x154)](_0x51b8a7[_0x28ace2(0x18e)])[_0x28ace2(0x145)](_0x37faf5=>{const _0x166b73=_0x28ace2;if(!_0xb27ffe){if(_0x51b8a7[_0x166b73(0x18e)][_0x37faf5]['name']==_0x4ce82c[_0x166b73(0x162)]()){_0x2f09fc=_0x51b8a7[_0x166b73(0x18e)][_0x37faf5][_0x166b73(0x179)];if(_0x51b8a7[_0x166b73(0x18e)][_0x37faf5][_0x166b73(0x167)]==_0x166b73(0x14a))_0x2f09fc=require['resolve'](_0x2f09fc);_0xb27ffe=!![];}}}),_0x2f09fc;}function _0x47f9(){const _0x4b896c=['</text>','default','replace','test','readFileSync','font-size=\x22','<svg>','dx=\x22','buffer','request','</path>','keys','fontSize','statusCode','3122484RrWdhZ','replaceAll','dy=\x22','/google_fonts','</tspan>','class','svgToPath','children','polygon','3NeCTJR','stringify','trim','fill','parse','all','</svg>','type','3689395lnkjeu','x=\x22','svg-convert-to-path/config/fonts/arial-unicode-ms.ttf','polyline','font-family=\x22','size','-Regular.ttf?raw=true','split','element-to-path','writeFileSync','class=\x22','get','then','<text\x20','map','from','11578842DPzjnH','path','Arial\x20Unicode\x20MS','toString','saveAs','y=\x22','<path\x20d=\x22','svg-convert-to-path/config/fonts.json','<path\x20','(?:[A-Za-z0-9+\x5c/]{4})*(?:[A-Za-z0-9+\x5c/]{2}==|[A-Za-z0-9+/]{3}=)?','<tspan','binary','isBuffer','circle','</text','694741dIqeas','font-family','loadAs','base64','utf-8','line','rect','font','match','961328JFSWcB','opentype.js','resolve','./public','<text','utf8','toLowerCase','1929748DOynME','loadSync','getPath','pop','Times\x20New\x20Roman','mkdirSync','12ObdYTt','font-size','.ttf','3557099JZprMA','length','fontPath','svg-convert-to-path/config/fonts/times.ttf','includes','forEach','push','svgson','existsSync'];_0x47f9=function(){return _0x4b896c;};return _0x47f9();}function _0x48a8(_0x1e4987,_0x1f09bb){const _0x47f9fc=_0x47f9();return _0x48a8=function(_0x48a8b2,_0x22cfd9){_0x48a8b2=_0x48a8b2-0x13d;let _0x58dc83=_0x47f9fc[_0x48a8b2];return _0x58dc83;},_0x48a8(_0x1e4987,_0x1f09bb);}async function addFont(_0x9455d,_0x175bd2){const _0x3c0c14=_0x3770b7,_0x3a1f12=require[_0x3c0c14(0x192)]('svg-convert-to-path/config/fonts.json');let _0x2692ae=fs[_0x3c0c14(0x14d)](_0x3a1f12,_0x3c0c14(0x195));_0x2692ae=JSON['parse'](_0x2692ae),_0x2692ae[_0x3c0c14(0x18e)][_0x3c0c14(0x146)]({'name':_0x9455d,'path':_0x175bd2}),fs[_0x3c0c14(0x171)](_0x3a1f12,JSON[_0x3c0c14(0x161)](_0x2692ae));return;};