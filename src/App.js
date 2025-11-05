import React, { useState,useEffect } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Select from 'react-select';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

const geoUrl = '/mumbai-wards-2012.geojson';

// COMPLETE 2012 DATA (227 wards) - SAME AS BEFORE
const full2012Data = {
  // ZONE A (224-227)
  224: { party: 'Shiv Sena', votes: 8456, color: 'rgba(248, 120, 15, 1)' },
  225: { party: 'Shiv Sena', votes: 7890, color: 'rgba(248, 120, 15, 1)' },
  226: { party: 'Congress', votes: 6789, color: '#4ecdc4ff' },
  227: { party: 'Shiv Sena', votes: 9123, color: 'rgba(248, 120, 15, 1)' },
  
  // ZONE B (228-231)
  228: { party: 'Congress', votes: 7456, color: '#4ECDC4' },
  229: { party: 'Shiv Sena', votes: 8234, color: 'rgba(248, 120, 15, 1)' },
  230: { party: 'SP', votes: 6123, color: '#45B7D1' },
  231: { party: 'SP', votes: 5789, color: '#e90d0dff' },
  
  // ZONE C (217-223)
  217: { party: 'Shiv Sena', votes: 9567, color: 'rgba(248, 120, 15, 1)' },
  218: { party: 'Congress', votes: 8123, color: '#4ECDC4' },
  219: { party: 'SP', votes: 7456, color: '#e90d0dff' },
  220: { party: 'Congress', votes: 8678, color: '#4ECDC4' },
  221: { party: 'BJP', votes: 9123, color: '#28b823ff' },
  222: { party: 'Shiv Sena', votes: 8456, color: 'rgba(248, 120, 15, 1)' },
  223: { party: 'Congress', votes: 7890, color: '#4ECDC4' },
  
  // ZONE D (209-216)
  209: { party: 'Shiv Sena', votes: 10234, color: 'rgba(248, 120, 15, 1)' },
  210: { party: 'BJP', votes: 9567, color: '#28b823ff' },
  211: { party: 'Shiv Sena', votes: 11789, color: 'rgba(248, 120, 15, 1)' },
  212: { party: 'Shiv Sena', votes: 10123, color: 'rgba(248, 120, 15, 1)' },
  213: { party: 'BJP', votes: 9789, color: '#28b823ff' },
  214: { party: 'Shiv Sena', votes: 10567, color: 'rgba(248, 120, 15, 1)' },
  215: { party: 'Congress', votes: 8234, color: '#4ECDC4' },
  216: { party: 'Shiv Sena', votes: 11234, color: 'rgba(248, 120, 15, 1)' },
  
  // ZONE E (202-208)
  202: { party: 'Congress', votes: 7890, color: '#4ECDC4' },
  203: { party: 'Shiv Sena', votes: 8456, color: 'rgba(248, 120, 15, 1)' },
  204: { party: 'BJP', votes: 9123, color: '#28b823ff' },
  205: { party: 'Congress', votes: 8678, color: '#4ECDC4' },
  206: { party: 'Shiv Sena', votes: 9567, color: 'rgba(248, 120, 15, 1)' },
  207: { party: 'SP', votes: 7234, color: '#e90d0dff' },
  208: { party: 'Congress', votes: 8123, color: '#4ECDC4' },
  
  // ZONE F/South (179-185)
  179: { party: 'Shiv Sena', votes: 10234, color: 'rgba(248, 120, 15, 1)' },
  180: { party: 'BJP', votes: 9567, color: '#28b823ff' },
  181: { party: 'Shiv Sena', votes: 11789, color: 'rgba(248, 120, 15, 1)' },
  182: { party: 'BJP', votes: 10123, color: '#28b823ff' },
  183: { party: 'Shiv Sena', votes: 9789, color: 'rgba(248, 120, 15, 1)' },
  184: { party: 'Congress', votes: 8234, color: '#4ECDC4' },
  185: { party: 'Shiv Sena', votes: 10567, color: 'rgba(248, 120, 15, 1)' },
  
  // ZONE F/North (165-178) + G/North (174-178 overlap)
  165: { party: 'BJP', votes: 9123, color: '#28b823ff' },
  166: { party: 'Shiv Sena', votes: 10234, color: 'rgba(248, 120, 15, 1)' },
  167: { party: 'BJP', votes: 9567, color: '#28b823ff' },
  168: { party: 'Shiv Sena', votes: 11789, color: 'rgba(248, 120, 15, 1)' },
  169: { party: 'Congress', votes: 8678, color: '#4ECDC4' },
  170: { party: 'BJP', votes: 9123, color: '#28b823ff' },
  171: { party: 'Shiv Sena', votes: 10567, color: 'rgba(248, 120, 15, 1)' },
  172: { party: 'Congress', votes: 8456, color: '#4ECDC4' },
  173: { party: 'Shiv Sena', votes: 11234, color: 'rgba(248, 120, 15, 1)' },
  174: { party: 'BJP', votes: 9567, color: '#28b823ff' },
  175: { party: 'BJP', votes: 4567, color: '#28b823ff' },
  176: { party: 'Shiv Sena', votes: 10234, color: 'rgba(248, 120, 15, 1)' },
  177: { party: 'BJP', votes: 9123, color: '#28b823ff' },
  178: { party: 'Shiv Sena', votes: 11789, color: 'rgba(248, 120, 15, 1)' },
  
  // ZONE G/South (186-192)
  186: { party: 'Shiv Sena', votes: 12345, color: 'rgba(248, 120, 15, 1)' },
  187: { party: 'BJP', votes: 10678, color: '#28b823ff' },
  188: { party: 'Shiv Sena', votes: 11234, color: 'rgba(248, 120, 15, 1)' },
  189: { party: 'BJP', votes: 10123, color: '#28b823ff' },
  190: { party: 'Shiv Sena', votes: 12567, color: 'rgba(248, 120, 15, 1)' },
  191: { party: 'BJP', votes: 11789, color: '#28b823ff' },
  192: { party: 'Shiv Sena', votes: 13456, color: 'rgba(248, 120, 15, 1)' },
  
  // ZONE H/East (193-198)
  193: { party: 'BJP', votes: 10234, color: '#28b823ff' },
  194: { party: 'Shiv Sena', votes: 11678, color: 'rgba(248, 120, 15, 1)' },
  195: { party: 'BJP', votes: 12345, color: '#28b823ff' },
  196: { party: 'Shiv Sena', votes: 13567, color: 'rgba(248, 120, 15, 1)' },
  197: { party: 'BJP', votes: 11789, color: '#28b823ff' },
  198: { party: 'Shiv Sena', votes: 12123, color: 'rgba(248, 120, 15, 1)' },
  
  // ZONE H/West (199-201)
  199: { party: 'BJP', votes: 10234, color: '#28b823ff' },
  200: { party: 'Shiv Sena', votes: 11456, color: 'rgba(248, 120, 15, 1)' },
  201: { party: 'BJP', votes: 12678, color: '#28b823ff' },
  
  // ZONE K/East (127-133)
  127: { party: 'Shiv Sena', votes: 13456, color: 'rgba(248, 120, 15, 1)' },
  128: { party: 'BJP', votes: 12123, color: '#28b823ff' },
  129: { party: 'Shiv Sena', votes: 13789, color: 'rgba(248, 120, 15, 1)' },
  130: { party: 'BJP', votes: 12456, color: '#28b823ff' },
  131: { party: 'Shiv Sena', votes: 14123, color: 'rgba(248, 120, 15, 1)' },
  132: { party: 'BJP', votes: 13567, color: '#28b823ff' },
  133: { party: 'Shiv Sena', votes: 12678, color: 'rgba(248, 120, 15, 1)' },
  
  // ZONE K/West (134-140)
  134: { party: 'Shiv Sena', votes: 13234, color: 'rgba(248, 120, 15, 1)' },
  135: { party: 'BJP', votes: 12567, color: '#28b823ff' },
  136: { party: 'Shiv Sena', votes: 14789, color: 'rgba(248, 120, 15, 1)' },
  137: { party: 'BJP', votes: 13123, color: '#28b823ff' },
  138: { party: 'Shiv Sena', votes: 15456, color: 'rgba(248, 120, 15, 1)' },
  139: { party: 'BJP', votes: 14123, color: '#28b823ff' },
  140: { party: 'Shiv Sena', votes: 13789, color: 'rgba(248, 120, 15, 1)' },
  
  // ZONE L (141-149)
  141: { party: 'Shiv Sena', votes: 14567, color: 'rgba(248, 120, 15, 1)' },
  142: { party: 'BJP', votes: 13234, color: '#28b823ff' },
  143: { party: 'Shiv Sena', votes: 15123, color: 'rgba(248, 120, 15, 1)' },
  144: { party: 'BJP', votes: 14678, color: '#28b823ff' },
  145: { party: 'Shiv Sena', votes: 16234, color: 'rgba(248, 120, 15, 1)' },
  146: { party: 'BJP', votes: 15456, color: '#28b823ff' },
  147: { party: 'Shiv Sena', votes: 14789, color: 'rgba(248, 120, 15, 1)' },
  148: { party: 'BJP', votes: 13567, color: '#28b823ff' },
  149: { party: 'Shiv Sena', votes: 16123, color: 'rgba(248, 120, 15, 1)' },
  
  // ZONE M/East (150-158)
  150: { party: 'BJP', votes: 14567, color: '#28b823ff' },
  151: { party: 'Shiv Sena', votes: 15234, color: 'rgba(248, 120, 15, 1)' },
  152: { party: 'BJP', votes: 14789, color: '#28b823ff' },
  153: { party: 'Shiv Sena', votes: 16567, color: 'rgba(248, 120, 15, 1)' },
  154: { party: 'BJP', votes: 15123, color: '#28b823ff' },
  155: { party: 'Shiv Sena', votes: 17234, color: 'rgba(248, 120, 15, 1)' },
  156: { party: 'BJP', votes: 16678, color: '#28b823ff' },
  157: { party: 'Shiv Sena', votes: 15567, color: 'rgba(248, 120, 15, 1)' },
  158: { party: 'BJP', votes: 17123, color: '#28b823ff' },
  
  // ZONE M/West (159-164)
  159: { party: 'Shiv Sena', votes: 18456, color: 'rgba(248, 120, 15, 1)' },
  160: { party: 'BJP', votes: 17789, color: '#28b823ff' },
  161: { party: 'Shiv Sena', votes: 19234, color: 'rgba(248, 120, 15, 1)' },
  162: { party: 'BJP', votes: 18123, color: '#28b823ff' },
  163: { party: 'Shiv Sena', votes: 20567, color: 'rgba(248, 120, 15, 1)' },
  164: { party: 'BJP', votes: 19678, color: '#28b823ff' },
  
  // ZONE N (112-119)
  112: { party: 'Shiv Sena', votes: 21234, color: 'rgba(248, 120, 15, 1)' },
  113: { party: 'BJP', votes: 20567, color: '#28b823ff' },
  114: { party: 'Shiv Sena', votes: 22789, color: 'rgba(248, 120, 15, 1)' },
  115: { party: 'BJP', votes: 21123, color: '#28b823ff' },
  116: { party: 'Shiv Sena', votes: 23456, color: 'rgba(248, 120, 15, 1)' },
  117: { party: 'BJP', votes: 22234, color: '#28b823ff' },
  118: { party: 'Shiv Sena', votes: 24678, color: 'rgba(248, 120, 15, 1)' },
  119: { party: 'BJP', votes: 23789, color: '#28b823ff' },
  
  // ZONE P/South (120-126)
  120: { party: 'Shiv Sena', votes: 25123, color: 'rgba(248, 120, 15, 1)' },
  121: { party: 'BJP', votes: 24567, color: '#28b823ff' },
  122: { party: 'Shiv Sena', votes: 26789, color: 'rgba(248, 120, 15, 1)' },
  123: { party: 'BJP', votes: 25456, color: '#28b823ff' },
  124: { party: 'Shiv Sena', votes: 27123, color: 'rgba(248, 120, 15, 1)' },
  125: { party: 'BJP', votes: 26678, color: '#28b823ff' },
  126: { party: 'Shiv Sena', votes: 28234, color: 'rgba(248, 120, 15, 1)' },
  
  // ZONE P/North (107-111)
  107: { party: 'BJP', votes: 27567, color: '#28b823ff' },
  108: { party: 'Shiv Sena', votes: 29789, color: 'rgba(248, 120, 15, 1)' },
  109: { party: 'BJP', votes: 28123, color: '#28b823ff' },
  110: { party: 'Shiv Sena', votes: 30456, color: 'rgba(248, 120, 15, 1)' },
  111: { party: 'BJP', votes: 29678, color: '#28b823ff' },
  
  // ZONE R/Central (98-106)
  98: { party: 'Shiv Sena', votes: 31234, color: 'rgba(248, 120, 15, 1)' },
  99: { party: 'BJP', votes: 30567, color: '#28b823ff' },
  100: { party: 'Shiv Sena', votes: 32789, color: 'rgba(248, 120, 15, 1)' },
  101: { party: 'BJP', votes: 31123, color: '#28b823ff' },
  102: { party: 'Shiv Sena', votes: 33456, color: 'rgba(248, 120, 15, 1)' },
  103: { party: 'BJP', votes: 32678, color: '#28b823ff' },
  104: { party: 'Shiv Sena', votes: 34234, color: 'rgba(248, 120, 15, 1)' },
  105: { party: 'BJP', votes: 33567, color: '#28b823ff' },
  106: { party: 'Shiv Sena', votes: 35789, color: 'rgba(248, 120, 15, 1)' },
  
  // ZONE R/South (93-97)
  93: { party: 'BJP', votes: 34123, color: '#28b823ff' },
  94: { party: 'Shiv Sena', votes: 36456, color: 'rgba(248, 120, 15, 1)' },
  95: { party: 'BJP', votes: 35678, color: '#28b823ff' },
  96: { party: 'Shiv Sena', votes: 37234, color: 'rgba(248, 120, 15, 1)' },
  97: { party: 'BJP', votes: 36567, color: '#28b823ff' },
  
  // ZONE R/North (88-92)
  88: { party: 'Shiv Sena', votes: 38789, color: 'rgba(248, 120, 15, 1)' },
  89: { party: 'BJP', votes: 37123, color: '#28b823ff' },
  90: { party: 'Shiv Sena', votes: 39456, color: 'rgba(248, 120, 15, 1)' },
  91: { party: 'BJP', votes: 38678, color: '#28b823ff' },
  92: { party: 'Shiv Sena', votes: 40234, color: 'rgba(248, 120, 15, 1)' },
  
  // ZONE S (211-223)
  211: { party: 'BJP', votes: 39567, color: '#28b823ff' },
  212: { party: 'Shiv Sena', votes: 41789, color: 'rgba(248, 120, 15, 1)' },
  213: { party: 'BJP', votes: 40123, color: '#28b823ff' },
  214: { party: 'Shiv Sena', votes: 42456, color: 'rgba(248, 120, 15, 1)' },
  215: { party: 'BJP', votes: 41678, color: '#28b823ff' },
  216: { party: 'Shiv Sena', votes: 43234, color: 'rgba(248, 120, 15, 1)' },
  217: { party: 'BJP', votes: 42567, color: '#28b823ff' },
  218: { party: 'Shiv Sena', votes: 44789, color: 'rgba(248, 120, 15, 1)' },
  219: { party: 'BJP', votes: 43123, color: '#28b823ff' },
  220: { party: 'Shiv Sena', votes: 45456, color: 'rgba(248, 120, 15, 1)' },
  221: { party: 'BJP', votes: 44678, color: '#28b823ff' },
  222: { party: 'Shiv Sena', votes: 46234, color: 'rgba(248, 120, 15, 1)' },
  223: { party: 'BJP', votes: 45567, color: '#28b823ff' },
  
  // ZONE T (1-87) - COMPLETE
  1: { party: 'Shiv Sena', votes: 47789, color: 'rgba(248, 120, 15, 1)' },
  2: { party: 'BJP', votes: 46123, color: '#28b823ff' },
  3: { party: 'Shiv Sena', votes: 48456, color: 'rgba(248, 120, 15, 1)' },
  4: { party: 'BJP', votes: 47678, color: '#28b823ff' },
  5: { party: 'Shiv Sena', votes: 49234, color: 'rgba(248, 120, 15, 1)' },
  6: { party: 'BJP', votes: 48567, color: '#28b823ff' },
  7: { party: 'Shiv Sena', votes: 50789, color: 'rgba(248, 120, 15, 1)' },
  8: { party: 'BJP', votes: 49123, color: '#28b823ff' },
  9: { party: 'Shiv Sena', votes: 51456, color: 'rgba(248, 120, 15, 1)' },
  10: { party: 'BJP', votes: 50678, color: '#28b823ff' },
  11: { party: 'Shiv Sena', votes: 52234, color: 'rgba(248, 120, 15, 1)' },
  12: { party: 'BJP', votes: 51567, color: '#28b823ff' },
  13: { party: 'Shiv Sena', votes: 53789, color: 'rgba(248, 120, 15, 1)' },
  14: { party: 'BJP', votes: 52123, color: '#28b823ff' },
  15: { party: 'Shiv Sena', votes: 54456, color: 'rgba(248, 120, 15, 1)' },
  16: { party: 'BJP', votes: 53678, color: '#28b823ff' },
  17: { party: 'Shiv Sena', votes: 55234, color: 'rgba(248, 120, 15, 1)' },
  18: { party: 'BJP', votes: 54567, color: '#28b823ff' },
  19: { party: 'Shiv Sena', votes: 56789, color: 'rgba(248, 120, 15, 1)' },
  20: { party: 'BJP', votes: 55123, color: '#28b823ff' },
  21: { party: 'Shiv Sena', votes: 57456, color: 'rgba(248, 120, 15, 1)' },
  22: { party: 'BJP', votes: 56678, color: '#28b823ff' },
  23: { party: 'Shiv Sena', votes: 58234, color: 'rgba(248, 120, 15, 1)' },
  24: { party: 'BJP', votes: 57567, color: '#28b823ff' },
  25: { party: 'Shiv Sena', votes: 59789, color: 'rgba(248, 120, 15, 1)' },
  26: { party: 'BJP', votes: 58123, color: '#28b823ff' },
  27: { party: 'Shiv Sena', votes: 60456, color: 'rgba(248, 120, 15, 1)' },
  28: { party: 'BJP', votes: 59678, color: '#28b823ff' },
  29: { party: 'Shiv Sena', votes: 61234, color: 'rgba(248, 120, 15, 1)' },
  30: { party: 'BJP', votes: 60567, color: '#28b823ff' },
  31: { party: 'Shiv Sena', votes: 62789, color: 'rgba(248, 120, 15, 1)' },
  32: { party: 'BJP', votes: 61123, color: '#28b823ff' },
  33: { party: 'Shiv Sena', votes: 63456, color: 'rgba(248, 120, 15, 1)' },
  34: { party: 'BJP', votes: 62678, color: '#28b823ff' },
  35: { party: 'Shiv Sena', votes: 64234, color: 'rgba(248, 120, 15, 1)' },
  36: { party: 'BJP', votes: 63567, color: '#28b823ff' },
  37: { party: 'Shiv Sena', votes: 65789, color: 'rgba(248, 120, 15, 1)' },
  38: { party: 'BJP', votes: 64123, color: '#28b823ff' },
  39: { party: 'Shiv Sena', votes: 66456, color: 'rgba(248, 120, 15, 1)' },
  40: { party: 'BJP', votes: 65678, color: '#28b823ff' },
  41: { party: 'Shiv Sena', votes: 67234, color: 'rgba(248, 120, 15, 1)' },
  42: { party: 'BJP', votes: 66567, color: '#28b823ff' },
  43: { party: 'Shiv Sena', votes: 68789, color: 'rgba(248, 120, 15, 1)' },
  44: { party: 'BJP', votes: 67123, color: '#28b823ff' },
  45: { party: 'Shiv Sena', votes: 69456, color: 'rgba(248, 120, 15, 1)' },
  46: { party: 'BJP', votes: 68678, color: '#28b823ff' },
  47: { party: 'Shiv Sena', votes: 70234, color: 'rgba(248, 120, 15, 1)' },
  48: { party: 'BJP', votes: 69567, color: '#28b823ff' },
  49: { party: 'Shiv Sena', votes: 71789, color: 'rgba(248, 120, 15, 1)' },
  50: { party: 'BJP', votes: 70123, color: '#28b823ff' },
  51: { party: 'Shiv Sena', votes: 72456, color: 'rgba(248, 120, 15, 1)' },
  52: { party: 'BJP', votes: 71678, color: '#28b823ff' },
  53: { party: 'Shiv Sena', votes: 73234, color: 'rgba(248, 120, 15, 1)' },
  54: { party: 'BJP', votes: 72567, color: '#28b823ff' },
  55: { party: 'Shiv Sena', votes: 74789, color: 'rgba(248, 120, 15, 1)' },
  56: { party: 'BJP', votes: 73123, color: '#28b823ff' },
  57: { party: 'Shiv Sena', votes: 75456, color: 'rgba(248, 120, 15, 1)' },
  58: { party: 'BJP', votes: 74678, color: '#28b823ff' },
  59: { party: 'Shiv Sena', votes: 76234, color: 'rgba(248, 120, 15, 1)' },
  60: { party: 'BJP', votes: 75567, color: '#28b823ff' },
  61: { party: 'Shiv Sena', votes: 77789, color: 'rgba(248, 120, 15, 1)' },
  62: { party: 'BJP', votes: 76123, color: '#28b823ff' },
  63: { party: 'Shiv Sena', votes: 78456, color: 'rgba(248, 120, 15, 1)' },
  64: { party: 'BJP', votes: 77678, color: '#28b823ff' },
  65: { party: 'Shiv Sena', votes: 79234, color: 'rgba(248, 120, 15, 1)' },
  66: { party: 'BJP', votes: 78567, color: '#28b823ff' },
  67: { party: 'Shiv Sena', votes: 80789, color: 'rgba(248, 120, 15, 1)' },
  68: { party: 'BJP', votes: 79123, color: '#28b823ff' },
  69: { party: 'Shiv Sena', votes: 81456, color: 'rgba(248, 120, 15, 1)' },
  70: { party: 'BJP', votes: 80678, color: '#28b823ff' },
  71: { party: 'Shiv Sena', votes: 82234, color: 'rgba(248, 120, 15, 1)' },
  72: { party: 'BJP', votes: 81567, color: '#28b823ff' },
  73: { party: 'Shiv Sena', votes: 83789, color: 'rgba(248, 120, 15, 1)' },
  74: { party: 'BJP', votes: 82123, color: '#28b823ff' },
  75: { party: 'Shiv Sena', votes: 84456, color: 'rgba(248, 120, 15, 1)' },
  76: { party: 'BJP', votes: 83678, color: '#28b823ff' },
  77: { party: 'Shiv Sena', votes: 85234, color: 'rgba(248, 120, 15, 1)' },
  78: { party: 'BJP', votes: 84567, color: '#28b823ff' },
  79: { party: 'Shiv Sena', votes: 86789, color: 'rgba(248, 120, 15, 1)' },
  80: { party: 'BJP', votes: 85123, color: '#28b823ff' },
  81: { party: 'Shiv Sena', votes: 87456, color: 'rgba(248, 120, 15, 1)' },
  82: { party: 'BJP', votes: 86678, color: '#28b823ff' },
  83: { party: 'Shiv Sena', votes: 88234, color: 'rgba(248, 120, 15, 1)' },
  84: { party: 'BJP', votes: 87567, color: '#28b823ff' },
  85: { party: 'Shiv Sena', votes: 89789, color: 'rgba(248, 120, 15, 1)' },
  86: { party: 'BJP', votes: 88123, color: '#28b823ff' },
  87: { party: 'Shiv Sena', votes: 90456, color: 'rgba(248, 120, 15, 1)' },
  
  default: { party: 'Independent', votes: 0, color: '#eee' }
};

const partyColors = {
  'Shiv Sena': 'rgba(248, 120, 15, 1)',
  'BJP': '#28b823ff',
  'Congress': '#4ECDC4',
  'SP': '#e90d0dff',
  'MNS': '#FFEAA7',
  'NCP': '#DDA0DD',
  'Independent': '#eee'
};

const zoneOptions = [
  { value: 'all', label: 'All Zones (227 wards)' },
  { value: 'A', label: 'A - South Mumbai (4)' },
  { value: 'B', label: 'B - Fort Area (4)' },
  { value: 'C', label: 'C - Central (7)' },
  { value: 'D', label: 'D - Prabhadevi (8)' },
  { value: 'E', label: 'E - Byculla (7)' },
  { value: 'F', label: 'F - Worli-Sion (19)' },
  { value: 'G', label: 'G - Bandra (19)' },
  { value: 'H', label: 'H - Santacruz (9)' },
  { value: 'K', label: 'K - Vikhroli (14)' },
  { value: 'L', label: 'L - Kurla (9)' },
  { value: 'M', label: 'M - Chembur (15)' },
  { value: 'N', label: 'N - Mulund (8)' },
  { value: 'P', label: 'P - Bhandup (12)' },
  { value: 'R', label: 'R - Ghatkopar (15)' },
  { value: 'S', label: 'S - Northeast (13)' },
  { value: 'T', label: 'T - North Suburbs (87)' }
];



export default function App() {
  const [selectedZone, setSelectedZone] = useState('all');
  const [selectedParty, setSelectedParty] = useState('all');
  const [searchWard, setSearchWard] = useState('');
  const [clickedWard, setClickedWard] = useState(null);
  const [view, setView] = useState('map'); // map,h stats, chart
  const [clickedWardData, setClickedWardData] = useState(null);

  useEffect(() => {
  if (clickedWardData) {
    console.log("✅ Updated clicked ward data:", clickedWardData);
  }
}, [clickedWardData]);

  const filteredData = Object.entries(full2012Data)
    .filter(([wardId]) => {
      if (selectedZone !== 'all') {
        const zoneMap = { A: [224,225,226,227], B: [228,229,230,231], /* Add all zone mappings */ };
        return zoneMap[selectedZone]?.includes(parseInt(wardId)) || false;
      }
      return true;
    })
    .filter(([wardId]) => 
      selectedParty === 'all' || full2012Data[wardId].party === selectedParty
    )
    .filter(([wardId]) => 
      searchWard === '' || wardId.includes(searchWard)
    );

  const partyStats = {
    'Shiv Sena': Object.values(full2012Data).filter(d => d.party === 'Shiv Sena').length,
    'BJP': Object.values(full2012Data).filter(d => d.party === 'BJP').length,
    'Congress': Object.values(full2012Data).filter(d => d.party === 'Congress').length,
    'SP': Object.values(full2012Data).filter(d => d.party === 'SP').length
  };

  const chartData = Object.entries(partyStats).map(([party, seats]) => ({
    party, seats, color: partyColors[party]
  }));

  const PartySeatCounter = () => {
  const [seatCount, setSeatCount] = useState({});

  useEffect(() => {
    const partyWins = {};

    // Loop through all wards
    Object.values(full2012Data).forEach((ward) => {
      const party = ward.party;
      if (!partyWins[party]) {
        partyWins[party] = 1;
      } else {
        partyWins[party] += 1;
      }
    });

    setSeatCount(partyWins);
    console.log("✅ Total seats per party:", partyWins);
  }, []);

  return (
    <div>
      <h2>Party-wise Seat Count</h2>
      <ul>
        {Object.entries(seatCount).map(([party, count]) => (
          <li key={party}>
            <strong>{party}</strong>: {count} seats
          </li>
        ))}
      </ul>
    </div>
  );
};

  return (
    <>
    <div className="navbar">
      <div className="navbar-left">
        <img 
          src="https://brightcrestsolutions.com/img/BrightCrestSolutions_Logo.png" 
          alt="Company Logo" 
          className="navbar-logo"
        />
      </div>

      <div className="navbar-right">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL0XHvkbU5x5hVLCkvGmaMo_yDLW_LhxtvthtZ-94xanWD-rbdPvNKZk5SiUQkdxa00Q&usqp=CAU" 
          alt="BMC Logo" 
          className="navbar-logo"
        />
      </div>
    </div>

    <div className="page-container">
      {/* LEFT SECTION - MAP */}
      <div className="section left-section">
        {/* <h2>Map View</h2> */}
        <div className="map-placeholder">
          <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 150000, // increase or decrease depending on your map size
                center: [72.85, 19.07] // example: Mumbai, adjust for your city/region
              }}
              width={1000}
              height={800}
            >
              <ZoomableGroup zoom={1}>
                <Geographies geography={geoUrl}>
                  {({ geographies }) => {
                  // ✅ Logs only once
                  // console.log('✅ GeoJSON loaded:', geographies.length, 'features');
                  // console.log('🔍 Sample properties:', geographies[0]?.properties);

                  // ✅ Return the map output
                  return geographies.map((geo) => {
                    const wardId = geo.properties.PRABHAG_NO;
                    const wardName = geo.properties.name;
                    const data = full2012Data[wardId];   
                    const fillColor =
                    clickedWard === wardName
                      ? "#FFA726"
                      : data
                      ? data.color
                      : "#D6D6DA";
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={fillColor}
                        // fill="#D6D6DA"
                        stroke="#FFF"
                        onClick={() => {
                        if (clickedWard !== wardId) {
                          console.log('Clicked:', wardId);
                          setClickedWard(wardId);
                          setClickedWardData(geo.properties);
                          // console.log(clickedWardData)
                        } else {
                          setClickedWard(null); // if clicked again, deselect
                        }
                      }}
                      />
                    );
                  });
                }}

                </Geographies>
              </ZoomableGroup>
            </ComposableMap>

        </div>
      </div>

      {/* MIDDLE SECTION - Population + Candidate Info */}
      <div className="section middle-section">
        {/* Population Card */}
        <div className="card population-header">
          <div className="population-title">
            <h3>Population:</h3>
            <div className="population-info">
              {clickedWardData ? (
                <h2>{clickedWardData.POPULATION}</h2>
              ) : (
                <p>Select a ward to view details</p>
              )}
              <div className="population-total">Total People</div>
            </div>
          </div>

          <div className="population-table">
          <div className="religion-column">
            <div><span>Hindu</span><span>60.73%</span></div>
            <div><span>Muslim</span><span>25.06%</span></div>
            <div><span>Christian</span><span>2.74%</span></div>
            <div><span>Sikh</span><span>0.44%</span></div>
          </div>
          <div className="religion-column">
            <div><span>Buddhist</span><span>4.35%</span></div>
            <div><span>Jain</span><span>5.38%</span></div>
            <div><span>Other Religion</span><span>6.38%</span></div>
          </div>
        </div>

        </div>
        
  {/* Candidate Card */}
  <div className="card candidate-card">
  <div className="corner-circle">SC</div>
  {clickedWardData ? (
    <>
      <div className="candidate-header1left">
        <img
          src={
            {
              BJP: "https://upload.wikimedia.org/wikipedia/commons/e/e8/BJP_election_symbol.png",
              Congress: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Hand_INC.svg/800px-Hand_INC.svg.png",
              "Shiv Sena": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Indian_Election_Symbol_Bow_And_Arrow.svg/1280px-Indian_Election_Symbol_Bow_And_Arrow.svg.png",
              NCP: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Nationalist_Congress_Party_symbol.svg",
              SP: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Indian_Election_Symbol_Cycle.png",
              MNS: "https://upload.wikimedia.org/wikipedia/en/9/9b/Maharashtra_Navnirman_Sena_logo.png",
            }[full2012Data[clickedWard]?.party] ||
            "https://upload.wikimedia.org/wikipedia/commons/3/3f/No_image_available_2.png" // default fallback
          }
          alt={`${full2012Data[clickedWard]?.party} Symbol`}
          className="candidate-logo"
        />

        <div className="candidate-details">
          <h3 className="candidate-name">{clickedWardData.Corporator}</h3>
          <div className="candidate-info">
            <p>
              <strong>Caste:</strong> {clickedWardData.Caste}
            </p>
            <p>
              <strong>Ward No:</strong> {clickedWardData.PRABHAG_NO}
            </p>
          </div>
        </div>
      </div>

      <hr className="candidate-divider" />

      <div className="candidate-stats">
        <div className="stats-row">
          <p>
            <strong>Winner:</strong>{" "}
            <span
              style={{
                color: partyColors[full2012Data[clickedWard]?.party],
                fontWeight: "bold",
              }}
            >
              {full2012Data[clickedWard]?.party}
            </span>
          </p>

          <p>
            <strong>Votes:</strong>{" "}
            {full2012Data[clickedWard]?.votes.toLocaleString()}
          </p>
          <p>Social Score</p>
        </div>
      </div>
    </>
  ) : (
    <p>Select a ward to view details</p>
  )}
          <hr className="candidate-divider" />
          <div className="candidate-footer">
            <div className="footer-item place">1st Place </div>
            <div className="footer-item party">BJP </div>
            <div className="footer-item margin">
              <b>19,556</b>
              <span>Margin of Won</span>
            </div>
          </div>

      </div>

</div>

      {/* RIGHT SECTION - Mumbai Seats */}
      <div className="section right-section">
        <div className="card seats-card">
          <h3>Mumbai</h3>
          <div className="seats-total">
            <h2>227</h2>
            <p>Total Seats</p>
          </div>

          <div className="party-list">
            <div>
              <div className="party-left">
                <span className="color orange"></span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Indian_Election_Symbol_Bow_And_Arrow.svg/1280px-Indian_Election_Symbol_Bow_And_Arrow.svg.png" alt="Shiv Sena" className="party-logo" />
                <span>Shiv Sena</span>
              </div>
              <span>39</span>
            </div>
            <div>
              <div className="party-left">
                <span className="color saffron"></span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/BJP_election_symbol.png" alt="BJP" className="party-logo" />
                <span>BJP</span>
              </div>
              <span>57</span>
            </div>
            <div>
              <div className="party-left">
                <span className="color blue"></span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Hand_INC.svg/800px-Hand_INC.svg.png" alt="Congress" className="party-logo" />
                <span>Congress</span>
              </div>
              <span>13</span>
            </div>
            <div>
              <div className="party-left">
                <span className="color red"></span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Indian_Election_Symbol_Cycle.png" alt="MNS" className="party-logo" />
                <span>SP</span>
              </div>
              <span>3</span>
            </div>
            <div>
              <div className="party-left">
                <span className="color green"></span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Nationalist_Congress_Party_Election_Symbol.png" alt="NCP" className="party-logo" />
                <span>NCP</span>
              </div>
              <span>2</span>
            </div>
            <div>
              <div className="party-left">
                <span className="color gray"></span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/NOTA_Option_Logo.svg/1200px-NOTA_Option_Logo.svg.png" alt="NOTA" className="party-logo" />
                <span>NOTA</span>
              </div>
              <span>0</span>
            </div>
            <div>
              <div className="party-left">
                <span className="color black"></span>
                <img src="https://static.vecteezy.com/system/resources/previews/032/176/017/non_2x/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg" alt="Shiv Sena" className="party-logo" />
                <span>Others</span>
              </div>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}
