import "./style.scss";
import Header from "../../components/AssessmentHeader/Header";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
// import {down} from "./down.svg"

import  d from "../../assets/images/smalldown.svg"
import AadharInput from "./AdharInput";
export default function CandidateVerificationAdhaar() {
  const [aadhaar, setAadhaar] = useState({ part1: "", part2: "", part3: "" });
  const otp2Ref = useRef(null);
  const otp3Ref = useRef(null);

  const handleInputChange = (e, part) => {
    const { value } = e.target;
    setAadhaar((prev) => ({
      ...prev,
      [part]: value,
    }));

    if (value.length === 4) {
      if (part === "part1") {
        otp2Ref.current.focus();
      } else if (part === "part2") {
        otp3Ref.current.focus();
      }
    }
  };

  const [selectedCountry, setSelectedCountry] = useState({
    code: "IND",
    label: "India",
    phone: "91",
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  const countries = [
    { code: "AND", label: "Andorra", phone: "376" },
    {
      code: "ARE",
      label: "United Arab Emirates",
      phone: "971",
    },
    { code: "AFG", label: "Afghanistan", phone: "93" },
    {
      code: "ATG",
      label: "Antigua and Barbuda",
      phone: "1-268",
    },
    { code: "AIA", label: "Anguilla", phone: "1-264" },
    { code: "ALB", label: "Albania", phone: "355" },
    { code: "ARM", label: "Armenia", phone: "374" },
    { code: "AGO", label: "Angola", phone: "244" },
    { code: "ATA", label: "Antarctica", phone: "672" },
    { code: "ARG", label: "Argentina", phone: "54" },
    { code: "ASM", label: "American Samoa", phone: "1-684" },
    { code: "AUT", label: "Austria", phone: "43" },
    {
      code: "AUS",
      label: "Australia",
      phone: "61",
      suggested: true,
    },
    { code: "ABW", label: "Aruba", phone: "297" },
    { code: "ALA", label: "Alland Islands", phone: "358" },
    { code: "AZE", label: "Azerbaijan", phone: "994" },
    {
      code: "BIH",
      label: "Bosnia and Herzegovina",
      phone: "387",
    },
    { code: "BRB", label: "Barbados", phone: "1-246" },
    { code: "BGD", label: "Bangladesh", phone: "880" },
    { code: "BEL", label: "Belgium", phone: "32" },
    { code: "BFA", label: "Burkina Faso", phone: "226" },
    { code: "BGR", label: "Bulgaria", phone: "359" },
    { code: "BHR", label: "Bahrain", phone: "973" },
    { code: "BDI", label: "Burundi", phone: "257" },
    { code: "BEN", label: "Benin", phone: "229" },
    { code: "BLM", label: "Saint Barthelemy", phone: "590" },
    { code: "BMU", label: "Bermuda", phone: "1-441" },
    { code: "BRN", label: "Brunei Darussalam", phone: "673" },
    { code: "BOL", label: "Bolivia", phone: "591" },
    { code: "BRA", label: "Brazil", phone: "55" },
    { code: "BHS", label: "Bahamas", phone: "1-242" },
    { code: "BTN", label: "Bhutan", phone: "975" },
    { code: "BVT", label: "Bouvet Island", phone: "47" },
    { code: "BWA", label: "Botswana", phone: "267" },
    { code: "BLR", label: "Belarus", phone: "375" },
    { code: "BLZ", label: "Belize", phone: "501" },
    {
      code: "CAN",
      label: "Canada",
      phone: "1",
      suggested: true,
    },
    {
      code: "CCK",
      label: "Cocos (Keeling) Islands",
      phone: "61",
    },
    {
      code: "COD",
      label: "Congo, Democratic Republic of the",
      phone: "243",
    },
    {
      code: "CAF",
      label: "Central African Republic",
      phone: "236",
    },
    {
      code: "COG",
      label: "Congo, Republic of the",
      phone: "242",
    },
    { code: "CHE", label: "Switzerland", phone: "41" },
    { code: "CIV", label: "Cote d'Ivoire", phone: "225" },
    { code: "COK", label: "Cook Islands", phone: "682" },
    { code: "CHL", label: "Chile", phone: "56" },
    { code: "CMR", label: "Cameroon", phone: "237" },
    { code: "CHN", label: "China", phone: "86" },
    { code: "COL", label: "Colombia", phone: "57" },
    { code: "CRI", label: "Costa Rica", phone: "506" },
    { code: "CUB", label: "Cuba", phone: "53" },
    { code: "CPV", label: "Cape Verde", phone: "238" },
    { code: "CUW", label: "Curacao", phone: "599" },
    { code: "CXR", label: "Christmas Island", phone: "61" },
    { code: "CYP", label: "Cyprus", phone: "357" },
    { code: "CZE", label: "Czech Republic", phone: "420" },
    {
      code: "DEU",
      label: "Germany",
      phone: "49",
      suggested: true,
    },
    { code: "DJI", label: "Djibouti", phone: "253" },
    { code: "DNK", label: "Denmark", phone: "45" },
    { code: "DMA", label: "Dominica", phone: "1-767" },
    {
      code: "DOM",
      label: "Dominican Republic",
      phone: "1-809",
    },
    { code: "DZA", label: "Algeria", phone: "213" },
    { code: "ECU", label: "Ecuador", phone: "593" },
    { code: "EST", label: "Estonia", phone: "372" },
    { code: "EGY", label: "Egypt", phone: "20" },
    { code: "ESH", label: "Western Sahara", phone: "212" },
    { code: "ERI", label: "Eritrea", phone: "291" },
    { code: "ESP", label: "Spain", phone: "34" },
    { code: "ETH", label: "Ethiopia", phone: "251" },
    { code: "FIN", label: "Finland", phone: "358" },
    { code: "FJI", label: "Fiji", phone: "679" },
    {
      code: "FLK",
      label: "Falkland Islands (Malvinas)",
      phone: "500",
    },
    {
      code: "FSM",
      label: "Micronesia, Federated States of",
      phone: "691",
    },
    { code: "FRO", label: "Faroe Islands", phone: "298" },
    {
      code: "FRA",
      label: "France",
      phone: "33",
      suggested: true,
    },
    { code: "GAB", label: "Gabon", phone: "241" },
    { code: "GBR", label: "United Kingdom", phone: "44" },
    { code: "GRD", label: "Grenada", phone: "1-473" },
    { code: "GEO", label: "Georgia", phone: "995" },
    { code: "GUF", label: "French Guiana", phone: "594" },
    { code: "GGY", label: "Guernsey", phone: "44" },
    { code: "GHA", label: "Ghana", phone: "233" },
    { code: "GIB", label: "Gibraltar", phone: "350" },
    { code: "GRL", label: "Greenland", phone: "299" },
    { code: "GMB", label: "Gambia", phone: "220" },
    { code: "GIN", label: "Guinea", phone: "224" },
    { code: "GLP", label: "Guadeloupe", phone: "590" },
    { code: "GNQ", label: "Equatorial Guinea", phone: "240" },
    { code: "GRC", label: "Greece", phone: "30" },
    {
      code: "SGS",
      label: "South Georgia and the South Sandwich Islands",
      phone: "500",
    },
    { code: "GTM", label: "Guatemala", phone: "502" },
    { code: "GUM", label: "Guam", phone: "1-671" },
    { code: "GNB", label: "Guinea-Bissau", phone: "245" },
    { code: "GUY", label: "Guyana", phone: "592" },
    { code: "HKG", label: "Hong Kong", phone: "852" },
    {
      code: "HMD",
      label: "Heard Island and McDonald Islands",
      phone: "672",
    },
    { code: "HND", label: "Honduras", phone: "504" },
    { code: "HRV", label: "Croatia", phone: "385" },
    { code: "HTI", label: "Haiti", phone: "509" },
    { code: "HUN", label: "Hungary", phone: "36" },
    { code: "IDN", label: "Indonesia", phone: "62" },
    { code: "IRL", label: "Ireland", phone: "353" },
    { code: "ISR", label: "Israel", phone: "972" },
    { code: "IMN", label: "Isle of Man", phone: "44" },
    { code: "IND", label: "India", phone: "91" },
    {
      code: "IOT",
      label: "British Indian Ocean Territory",
      phone: "246",
    },
    { code: "IRQ", label: "Iraq", phone: "964" },
    {
      code: "IRN",
      label: "Iran, Islamic Republic of",
      phone: "98",
    },
    { code: "ISL", label: "Iceland", phone: "354" },
    { code: "ITA", label: "Italy", phone: "39" },
    { code: "JEY", label: "Jersey", phone: "44" },
    { code: "JAM", label: "Jamaica", phone: "1-876" },
    { code: "JOR", label: "Jordan", phone: "962" },
    {
      code: "JPN",
      label: "Japan",
      phone: "81",
      suggested: true,
    },
    { code: "KEN", label: "Kenya", phone: "254" },
    { code: "KGZ", label: "Kyrgyzstan", phone: "996" },
    { code: "KHM", label: "Cambodia", phone: "855" },
    { code: "KIR", label: "Kiribati", phone: "686" },
    { code: "COM", label: "Comoros", phone: "269" },
    {
      code: "KNA",
      label: "Saint Kitts and Nevis",
      phone: "1-869",
    },
    {
      code: "PRK",
      label: "Korea, Democratic People's Republic of",
      phone: "850",
    },
    { code: "KOR", label: "Korea, Republic of", phone: "82" },
    { code: "KWT", label: "Kuwait", phone: "965" },
    { code: "CYM", label: "Cayman Islands", phone: "1-345" },
    { code: "KAZ", label: "Kazakhstan", phone: "7" },
    {
      code: "LAO",
      label: "Lao People's Democratic Republic",
      phone: "856",
    },
    { code: "LBN", label: "Lebanon", phone: "961" },
    { code: "LCA", label: "Saint Lucia", phone: "1-758" },
    { code: "LIE", label: "Liechtenstein", phone: "423" },
    { code: "LKA", label: "Sri Lanka", phone: "94" },
    { code: "LBR", label: "Liberia", phone: "231" },
    { code: "LSO", label: "Lesotho", phone: "266" },
    { code: "LTU", label: "Lithuania", phone: "370" },
    { code: "LUX", label: "Luxembourg", phone: "352" },
    { code: "LVA", label: "Latvia", phone: "371" },
    { code: "LBY", label: "Libya", phone: "218" },
    { code: "MAR", label: "Morocco", phone: "212" },
    { code: "MCO", label: "Monaco", phone: "377" },
    { code: "MDA", label: "Moldova, Republic of", phone: "373" },
    { code: "MNE", label: "Montenegro", phone: "382" },
    {
      code: "MAF",
      label: "Saint Martin (French part)",
      phone: "590",
    },
    { code: "MDG", label: "Madagascar", phone: "261" },
    { code: "MHL", label: "Marshall Islands", phone: "692" },
    {
      code: "MKD",
      label: "Macedonia, the Former Yugoslav Republic of",
      phone: "389",
    },
    { code: "MLI", label: "Mali", phone: "223" },
    { code: "MMR", label: "Myanmar", phone: "95" },
    { code: "MNG", label: "Mongolia", phone: "976" },
    { code: "MAC", label: "Macao", phone: "853" },
    { code: "MNP", label: "Northern Mariana Islands", phone: "1-670" },
    { code: "MTQ", label: "Martinique", phone: "596" },
    { code: "MRT", label: "Mauritania", phone: "222" },
    { code: "MSR", label: "Montserrat", phone: "1-664" },
    { code: "MLT", label: "Malta", phone: "356" },
    { code: "MUS", label: "Mauritius", phone: "230" },
    { code: "MDV", label: "Maldives", phone: "960" },
    { code: "MWI", label: "Malawi", phone: "265" },
    { code: "MEX", label: "Mexico", phone: "52" },
    { code: "MYS", label: "Malaysia", phone: "60" },
    { code: "MOZ", label: "Mozambique", phone: "258" },
    { code: "NAM", label: "Namibia", phone: "264" },
    { code: "NCL", label: "New Caledonia", phone: "687" },
    { code: "NER", label: "Niger", phone: "227" },
    { code: "NFK", label: "Norfolk Island", phone: "672" },
    { code: "NGA", label: "Nigeria", phone: "234" },
    { code: "NIC", label: "Nicaragua", phone: "505" },
    { code: "NLD", label: "Netherlands", phone: "31" },
    { code: "NOR", label: "Norway", phone: "47" },
    { code: "NPL", label: "Nepal", phone: "977" },
    { code: "NRU", label: "Nauru", phone: "674" },
    { code: "NIU", label: "Niue", phone: "683" },
    { code: "NZL", label: "New Zealand", phone: "64" },
    { code: "OMN", label: "Oman", phone: "968" },
    { code: "PAN", label: "Panama", phone: "507" },
    { code: "PER", label: "Peru", phone: "51" },
    { code: "PYF", label: "French Polynesia", phone: "689" },
    { code: "PNG", label: "Papua New Guinea", phone: "675" },
    { code: "PHL", label: "Philippines", phone: "63" },
    { code: "PAK", label: "Pakistan", phone: "92" },
    { code: "POL", label: "Poland", phone: "48" },
    {
      code: "SPM",
      label: "Saint Pierre and Miquelon",
      phone: "508",
    },
    { code: "PCN", label: "Pitcairn", phone: "870" },
    { code: "PRI", label: "Puerto Rico", phone: "1" },
    {
      code: "PSE",
      label: "Palestine, State of",
      phone: "970",
    },
    { code: "PRT", label: "Portugal", phone: "351" },
    { code: "PLW", label: "Palau", phone: "680" },
    { code: "PRY", label: "Paraguay", phone: "595" },
    { code: "QAT", label: "Qatar", phone: "974" },
    { code: "REU", label: "Reunion", phone: "262" },
    { code: "ROM", label: "Romania", phone: "40" },
    { code: "SER", label: "Serbia", phone: "381" },
    { code: "RUS", label: "Russian Federation", phone: "7" },
    { code: "RWA", label: "Rwanda", phone: "250" },
    { code: "SAU", label: "Saudi Arabia", phone: "966" },
    { code: "SOL", label: "Solomon Islands", phone: "677" },
    { code: "SEY", label: "Seychelles", phone: "248" },
    { code: "SUD", label: "Sudan", phone: "249" },
    { code: "SWE", label: "Sweden", phone: "46" },
    { code: "SIN", label: "Singapore", phone: "65" },
    { code: "HEL", label: "Saint Helena", phone: "290" },
    { code: "SLO", label: "Slovenia", phone: "386" },
    { code: "SJM", label: "Svalbard and Jan Mayen", phone: "47" },
    { code: "SVK", label: "Slovakia", phone: "421" },
    { code: "SIE", label: "Sierra Leone", phone: "232" },
    { code: "SMR", label: "San Marino", phone: "378" },
    { code: "SEN", label: "Senegal", phone: "221" },
    { code: "SOM", label: "Somalia", phone: "252" },
    { code: "SUR", label: "Suriname", phone: "597" },
    { code: "SSD", label: "South Sudan", phone: "211" },
    { code: "STP", label: "Sao Tome and Principe", phone: "239" },
    { code: "SLV", label: "El Salvador", phone: "503" },
    { code: "SXM", label: "Sint Maarten (Dutch part)", phone: "1-721" },
    { code: "SYR", label: "Syrian Arab Republic", phone: "963" },
    { code: "SWZ", label: "Swaziland", phone: "268" },
    { code: "TCA", label: "Turks and Caicos Islands", phone: "1-649" },
    { code: "CHA", label: "Chad", phone: "235" },
    { code: "ATF", label: "French Southern Territories", phone: "262" },
    { code: "TOG", label: "Togo", phone: "228" },
    { code: "THA", label: "Thailand", phone: "66" },
    { code: "TAJ", label: "Tajikistan", phone: "992" },
    { code: "TOK", label: "Tokelau", phone: "690" },
    { code: "TLS", label: "Timor-Leste", phone: "670" },
    { code: "TKM", label: "Turkmenistan", phone: "993" },
    { code: "TUN", label: "Tunisia", phone: "216" },
    { code: "TON", label: "Tonga", phone: "676" },
    { code: "TUR", label: "Turkey", phone: "90" },
    { code: "TTO", label: "Trinidad and Tobago", phone: "1-868" },
    { code: "TUV", label: "Tuvalu", phone: "688" },
    { code: "TWN", label: "Taiwan", phone: "886" },
    { code: "TZA", label: "United Republic of Tanzania", phone: "255" },
    { code: "UKR", label: "Ukraine", phone: "380" },
    { code: "UGA", label: "Uganda", phone: "256" },
    { code: "USA", label: "United States", phone: "1", suggested: true },
    { code: "URY", label: "Uruguay", phone: "598" },
    { code: "UZB", label: "Uzbekistan", phone: "998" },
    { code: "VAT", label: "Holy See (Vatican City State)", phone: "379" },
    { code: "VCT", label: "Saint Vincent and the Grenadines", phone: "1-784" },
    { code: "VEN", label: "Venezuela", phone: "58" },
    { code: "VGB", label: "British Virgin Islands", phone: "1-284" },
    { code: "VIR", label: "US Virgin Islands", phone: "1-340" },
    { code: "VNM", label: "Vietnam", phone: "84" },
    { code: "VUT", label: "Vanuatu", phone: "678" },
    { code: "WLF", label: "Wallis and Futuna", phone: "681" },
    { code: "WSM", label: "Samoa", phone: "685" },
    { code: "XKX", label: "Kosovo", phone: "383" },
    { code: "YEM", label: "Yemen", phone: "967" },
    { code: "MYT", label: "Mayotte", phone: "262" },
    { code: "ZAF", label: "South Africa", phone: "27" },
    { code: "ZMB", label: "Zambia", phone: "260" },
    { code: "ZWE", label: "Zimbabwe", phone: "263" },
  ];

  return (
    <>
      <div className="candidate-verification-outer-container">
        <Header />
        <div className="candidate-verification-inner-container">
          <div className="candidate-verification-content-container">
            <h1>Candidate Verification</h1>
            <div className="combined-container-prargraph-and-inputfields">
              <div className="paragraph-and-input-container">
                {/* <p>Please enter your Aadhar number</p> */}
                {/* <div className="adhaar-input-container">
                  <input
                    type="text"
                    id="otp1"
                    maxLength="4"
                    className="otp-input"
                    value={aadhaar.part1}
                    onChange={(e) => handleInputChange(e, "part1")}
                  />
                  <input
                    type="text"
                    id="otp2"
                    maxLength="4"
                    className="otp-input"
                    value={aadhaar.part2}
                    ref={otp2Ref}
                    onChange={(e) => handleInputChange(e, "part2")}
                  />
                  <input
                    type="text"
                    id="otp3"
                    maxLength="4"
                    className="otp-input"
                    value={aadhaar.part3}
                    ref={otp3Ref}
                    onChange={(e) => handleInputChange(e, "part3")}
                  />
                </div> */}
                <AadharInput/>
              </div>
              <div className="paragraph-and-input-container">
                <p>Please enter your Registered Mobile number</p>
                <div className="mobile-number-input-container">
                  <div className="left-container">
                    <div className="dropdown" style={{ position: "relative" }}>
                      <div
                        className="dropdown-header"
                        onClick={toggleDropdown}
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        {selectedCountry.code}
                        <span className={`dropdown-icon ${isOpen ? "open" : ""}`} style={{ marginLeft: "10px" }}>
                          <img src={d} alt="" />
                        </span>
                      </div>
                      {isOpen && (
                        <div
                          className="dropdown-menu"
                          style={{
                            position: "absolute",
                            top: "100%",
                            left: "0",
                            backgroundColor: "#fff",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            padding: "10px",
                            maxHeight: "200px",
                            overflowY: "auto",
                          }}
                        >
                          <ul className="option-list" style={{ listStyleType: "none", padding: "0", margin: "0" }}>
                            {countries.map((country) => (
                              <li
                                key={country.code}
                                className="dropdown-item"
                                style={{ cursor: "pointer", padding: "5px 0", borderBottom: "1px solid #ccc" }}
                                onClick={() => handleCountryClick(country)}
                              >
                                {country.code}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="country-code-and-mobile-input">
                    <p>{`+${selectedCountry.phone}`}</p>
                    <input
                      type="text"
                      className="mobile-number-input"
                      maxLength="10"
                      onInput={(e) => {
                        e.target.value = e.target.value
                          .replace(/[^0-9]/g, "")
                          .slice(0, 10);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="verification-button">
              <Link to="/candidate-verification-enter-otp">
                <Button
                  variant="outlined"
                  sx={{
                    border: "solid 1px #5C27C0",
                    color: "#fff",
                    borderRadius: "4.75px",
                    width: "223px",
                    height: "46px",
                    fontWeight: "400",
                    textTransform: "capitalize",
                    background: "#5C27C0",
                    fontSize: "18px !important",
                    alignSelf: "center",
                    "&:hover": {
                      background: "#fff",
                      color: "#5C27C0",
                      border: "solid 1px #5C27C0",
                    },
                  }}
                >
                  Click to verify
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
