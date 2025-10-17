import servisBild1 from '../assets/images/servisBild1.png';
import servisBild2 from '../assets/images/servisBild2.png';
import servisBild3 from '../assets/images/servisBild3.png';
import servisBild4 from '../assets/images/servisBild4.png';
import arrow from '../assets/images/Group 338.png';
import garanti from '../assets/images/garanti.png';
import zulassung from '../assets/images/zulassungsdindt.png';
import inzahlungs from '../assets/images/inzahlungsnamen.png';
import finansirungen from '../assets/images/finansiren.png'

const allServices = [
  {
    title: 'Geprüfte und getestete Gebrauchtfahrzeuge',
    image: servisBild1
  },
  {
    title: 'Gebrauchtwagencheck durch unabhängige Prüf-Institutionen',
    image: servisBild2
  },
  {
    title: 'Bundesweiter Zulassungsdienst',
    image: zulassung,
    className: 'zulassung'
  },
  {
    title: 'Bundesweite Anlieferung',
    image: servisBild4
  },
  {
    title: '12 Monate Gewährleistung auf Bestandsfahrzeuge',
    image: servisBild3
  },
  {
    title: 'Inzahlungnahmen zu fairen Preisen',
    image: inzahlungs
  },
  {
    title: 'Finanzierungen zu bestmöglichen Zinssätzen',
    image: finansirungen
  },
  {
    title: 'Zusatzgarantien für mehr Sicherheit',
    image: garanti,
    btn: arrow
  },
];

export default allServices;