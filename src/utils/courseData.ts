

interface courseData {
  courseId: number;
  course_name: string;
  data: {
    module: number;
    questions: {
      question: string;
      options: string[];
      answer: number[];
    }[];
  }[];
}

const courseQuestions: courseData[] = [
  {
    courseId: 1,
    course_name: "Forest",
    data: [
      {
        module: 1,
        questions: [
          {
            question: "Tropical moist forests do not include",
            options: [
              "Broadleaved forests",
              "Wet evergreen forests",
              "Semi-evergreen forests",
              "Moist deciduous forests",
            ],
            answer: [0],
          },
          {
            question: "Which of these is not a use value?",
            options: [
              "Direct value",
              "Indirect value",
              "Option value",
              "Existence value",
            ],
            answer: [3],
          },
          {
            question:
              "The value derived from the knowledge of use of resources by others in the current generation is called",
            options: [
              "Altruistic value",
              "Bequest value",
              "Existence value",
              "Option value",
            ],
            answer: [0],
          },
          {
            question: "Montane sub-tropical forests do not involve",
            options: [
              "Broadleaved forests",
              "Pine forests",
              "Semi-evergreen forests",
              "Dry evergreen forests",
            ],
            answer: [2],
          },
          {
            question:
              "'Plant community, predominantly comprised of trees and other woody vegetation, usually with a closed canopy' is",
            options: [
              "Silviculture definition of forests",
              "FAO definition of forests",
              "Legal definition of forests",
              "Ecological definition of forests",
            ],
            answer: [3],
          },
          {
            question: "Which of these is not a consumptive value?",
            options: [
              "Timber",
              "Firewood",
              "Non-timber forest products",
              "Education",
            ],
            answer: [3],
          },
          {
            question: "The term 'forest' originates from",
            options: [
              "Latin foris meaning outside",
              "Greek foris meaning outside",
              "Latin foris meaning trees",
              "Greek foris meaning trees",
            ],
            answer: [0],
          },
          {
            question:
              "The value of leaving use and non-use values for offspring's or future generation is called",
            options: [
              "Altruistic value",
              "Bequest value",
              "Existence value",
              "Option value",
            ],
            answer: [1],
          },
          {
            question: "Which of these is not a forest type found in India?",
            options: [
              "Mediterranean dry",
              "Tropical dry",
              "Montane temperate",
              "Alpine",
            ],
            answer: [0],
          },
          {
            question:
              "According to the Supreme Court, the term forest land includes",
            options: [
              "Some area recorded as forest in the government record according to ownership",
              "Any area recorded as forest in the government record according to ownership",
              "Some area recorded as forest in the government record irrespective of ownership",
              "Any area recorded as forest in the government record irrespective of ownership",
            ],
            answer: [3],
          },
        ],
      },
      {
        module: 2,
        questions: [
          {
            question: "In the context of plant nutrition, boron is?",
            options: [
              "macronutrient",
              "micronutrient",
              "primary nutrient",
              "secondary nutrient",
            ],
            answer: [1],
          },
          {
            question:
              "The art and science of cultivating forest crops is called?",
            options: [
              "foresticulture",
              "monoculture",
              "silviculture",
              "silvics",
            ],
            answer: [2],
          },
          {
            question:
              "The climax near Tindi village is being controlled by disturbance by cattle. This is an example of?",
            options: [
              "climatic climax",
              "edaphic climax",
              "disclimax",
              "catastrophic climax",
            ],
            answer: [2],
          },
          {
            question:
              "Which of these is not a characteristic of pioneer species?",
            options: [
              "ability to grow on bare rocks",
              "ability to tolerate extreme temperatures",
              "large size",
              "short life span",
            ],
            answer: [2],
          },
          {
            question:
              "Which of these depicts correctly the lithosere primary succession?",
            options: [
              "rock --> crustose lichen --> foliose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax",
              "rock --> foliose lichen --> crustose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax",
              "moss --> crustose lichen --> foliose lichen --> rock --> herbaceous stage --> shrub --> woodland --> climax",
            ],
            answer: [0],
          },
          {
            question:
              "The study of life history/ general features of forest crops with respect to environmental factors is called?",
            options: [
              "foresticulture",
              "monoculture",
              "silviculture",
              "silvics",
            ],
            answer: [3],
          },
          {
            question: "Net primary productivity is given by?",
            options: ["APAR + LUE", "APAR X LUE", "APAR - LUE", "APAR / LUE"],
            answer: [1],
          },
          {
            question: "A climax caused by wildfires is an example of?",
            options: [
              "climatic climax",
              "edaphic climax",
              "disclimax",
              "catastrophic climax",
            ],
            answer: [3],
          },
          {
            question:
              "Practical application of scientific, technical and economic principles of forestry comes under which branch of forestry?",
            options: [
              "forest management",
              "forest economics",
              "forest mensuration",
              "forest protection",
            ],
            answer: [0],
          },
          {
            question: "Which of these is an abiotic factor?",
            options: ["vines", "trees", "reptiles", "water"],
            answer: [3],
          },
        ],
      },
      {
        module: 3,
        questions: [
          {
            question: "Regur is a term for?",
            options: [
              "black cotton soil",
              "alluvial soil",
              "saline soil",
              "red and yellow soil",
            ],
            answer: [0],
          },
          {
            question: "Carbonation is an example of?",
            options: [
              "chemical weathering",
              "physical weathering",
              "biological weathering",
              "none of these",
            ],
            answer: [0],
          },
          {
            question: "Banger is a type of?",
            options: [
              "black cotton soil",
              "alluvial soil",
              "saline soil",
              "red and yellow soil",
            ],
            answer: [1],
          },
          {
            question: "Cryofracturing is an example of?",
            options: [
              "chemical weathering",
              "physical weathering",
              "biological weathering",
              "none of these",
            ],
            answer: [1],
          },
          {
            question: "In soil profile, C refers to?",
            options: [
              "organic surface layer",
              "topsoil layer",
              "subsoil layer",
              "substratum layer",
            ],
            answer: [3],
          },
          {
            question: "Vertical arrangement of soil horizon is called?",
            options: [
              "soil texture",
              "soil structure",
              "soil profile",
              "soil science",
            ],
            answer: [2],
          },
          {
            question: "Thermal stresses lead to?",
            options: [
              "chemical weathering",
              "physical weathering",
              "biological weathering",
              "none of these",
            ],
            answer: [1],
          },
          {
            question: "Khadar is a type of?",
            options: [
              "black cotton soil",
              "alluvial soil",
              "saline soil",
              "red and yellow soil",
            ],
            answer: [1],
          },
          {
            question: "Hydrolysis is an example of?",
            options: [
              "chemical weathering",
              "physical weathering",
              "biological weathering",
              "none of these",
            ],
            answer: [0],
          },
          {
            question: "Which of these has the highest organic matter content?",
            options: [
              "peaty soil",
              "alluvial soil",
              "saline soil",
              "red and yellow soil",
            ],
            answer: [0],
          },
        ],
      },
      {
        module: 4,
        questions: [
          {
            question:
              "Measurement of height based on similar triangles comes under?",
            options: [
              "similar measurement",
              "dissimilar measurement",
              "direct measurement",
              "indirect measurement",
            ],
            answer: [3],
          },
          {
            question:
              "For normal form factor, the reference of the base of the cylinder is?",
            options: [
              "base of the tree",
              "breast height",
              "10% of tree height",
              "20% of tree height",
            ],
            answer: [2],
          },
          {
            question:
              "In a triangle, the angle between base and hypotenuse, theta= 60 degree and the hypotenuse c = 2cm. Find the length of the base b?",
            options: ["0.33", "0.5", "0.75", "1"],
            answer: [3],
          },
          {
            question:
              "3 trees are located in a sample plot of 15m X 15m. Their dbh are as under: dbh= 25cm, 30cm, 35cm. Find the stand basal area in sq m per Ha?",
            options: ["9.6", "14.6", "21.6", "27.6"],
            answer: [0],
          },
          {
            question:
              "Consider a stand of eucalyptus, trees that are on average 30cm in diameter and spaced on a regular 3m grid. Find the spacing factor?",
            options: ["5", "10", "15", "data insufficient"],
            answer: [1],
          },
          {
            question:
              "For a tree with dbh= 45.6cm, height= 27m and total stem volume of 1.78cum, the artificial form factor of the tree is:",
            options: ["0.1", "0.2", "0.3", "0.4"],
            answer: [3],
          },
          {
            question:
              "For the absolute form factor, the reference for the base of the cylinder is?",
            options: [
              "base of the tree",
              "breast height",
              "10% of the height",
              "20% of the height",
            ],
            answer: [0],
          },
          {
            question:
              "Diameter over bark (dob), diameter under bark (dub), and the bark thickness (tb) are related as?",
            options: [
              "dob = dub + tb",
              "dob = dub - tb",
              "dob = dub + 2 X tb",
              "dob = dub - 2 X tb",
            ],
            answer: [2],
          },
          {
            question: "Choose the correct statement?",
            options: [
              "For a non-circular section, girth tape over-estimates the sectional area",
              "For a non-circular section, girth tape under-estimates the sectional area",
              "For a non-circular section, girth tape correctly estimates the sectional area",
              "None of these is a correct statement",
            ],
            answer: [0],
          },
          {
            question: "A tree has dbh of 25cm. Find the basal area in sq m?",
            options: [".049", ".096", ".149", ".195"],
            answer: [0],
          },
        ],
      },
      {
        module: 5,
        questions: [
          {
            question: "The frequency of flyovers is an indicator of?",
            options: [
              "spatial resolution",
              "temporal resolution",
              "spectral resolution",
              "radiometric resolution",
            ],
            answer: [1],
          },
          {
            question:
              "____ is how close the measured values are to the correct value?",
            options: ["accuracy", "precision", "bias", "variance"],
            answer: [0],
          },
          {
            question:
              "This sampling employs a simple rule of selecting every k unit starting with a number chosen at random from 1 to k as the random start. We are talking about?",
            options: [
              "simple random sampling",
              "systematic sampling",
              "stratified sampling",
              "multistage sampling",
            ],
            answer: [1],
          },
          {
            question: "A list of sampling units is called a?",
            options: ["frame", "window", "sample", "population"],
            answer: [0],
          },
          {
            question: "Which of these is correct?",
            options: [
              "Plane surveying takes into account the true shape of the earth and is used for smaller areas (<250 sq km)",
              "Plane surveying takes into account the true shape of the earth and is used for larger areas (>250 sq km)",
              "Geodetic surveying takes into account the true shape of the earth and is used for smaller areas (<250 sq km)",
              "Geodetic surveying takes into account the true shape of the earth and is used for larger areas (>250 sq km)",
            ],
            answer: [3],
          },
          {
            question:
              "A sampling procedure such that each possible combination of sampling units out of the population has the same chance of being selected is referred to as?",
            options: [
              "simple random sampling",
              "systematic sampling",
              "stratified sampling",
              "multistage sampling",
            ],
            answer: [0],
          },
          {
            question: "Bathymetric LiDAR uses?",
            options: [
              "far infrared light",
              "near infrared light",
              "orange light",
              "green light",
            ],
            answer: [3],
          },
          {
            question: "IMU stands for?",
            options: [
              "imperial metering unit",
              "inertial metering unit",
              "imperial measurement unit",
              "inertial measurement unit",
            ],
            answer: [3],
          },
          {
            question:
              "____ is how close the measured values are to each other?",
            options: ["accuracy", "precision", "bias", "variance"],
            answer: [1],
          },
          {
            question:
              "The time of flight of LiDAR is 0.00001 sec. Find the distance of the object from the instrument?",
            options: ["500m", "1000m", "1500m", "2000m"],
            answer: [2],
          },
        ],
      },
      {
        module: 6,
        questions: [
          {
            question:
              "A scientist uses a trap to capture a monkey. In the context of the Wildlife Protection Act 1972,",
            options: [
              "the trap is a weapon and capturing is hunting",
              "the trap is not a weapon and capturing is hunting",
              "the trap is a weapon and capturing is not hunting",
              "the trap is not a weapon and capturing is not hunting",
            ],
            answer: [0],
          },
          {
            question: "In the formula I = PXAXT, P refers to?",
            options: [
              "professional pressure",
              "pollution pressure",
              "population pressure",
              "none of the above",
            ],
            answer: [2],
          },
          {
            question: "Which of these is a deterministic factor?",
            options: [
              "environmental variation",
              "forest fire",
              "death rate",
              "diseases",
            ],
            answer: [2],
          },
          {
            question: "Which of these is a stochastic factor?",
            options: [
              "birth rate",
              "death rate",
              "population structure",
              "forest fire",
            ],
            answer: [3],
          },
          {
            question: "In the formula I = PXAXT, T refers to?",
            options: [
              "transference",
              "time",
              "technology",
              "none of the above",
            ],
            answer: [2],
          },
          {
            question: "Which of these forms the fire triangle?",
            options: [
              "fire, air, heat",
              "fire, oxygen, wood",
              "fuel, air, wood",
              "fuel, oxygen, heat",
            ],
            answer: [3],
          },
          {
            question:
              "A veterinarian uses an immobilizing gun to capture a deer. In the context of the Wildlife Protection Act 1972,",
            options: [
              "the immobilizing gun is a weapon and capturing is hunting",
              "the immobilizing gun is not a weapon and capturing is hunting",
              "the immobilizing gun is a weapon and capturing is not hunting",
              "the immobilizing gun is not a weapon and capturing is not hunting",
            ],
            answer: [0],
          },
          {
            question:
              "Invasive climbers increase the probability of which of these fire types?",
            options: [
              "ground fire",
              "surface fire",
              "ladder fire",
              "firestorm",
            ],
            answer: [2],
          },
          {
            question: "The acronym HIPPO does not include?",
            options: [
              "habitat loss",
              "habitat enhancement",
              "over-harvesting",
              "human over-population",
            ],
            answer: [1],
          },
          {
            question: "The acronym HIPPO does not include?",
            options: [
              "habitat loss",
              "invasive species",
              "pollination",
              "pollution",
            ],
            answer: [2],
          },
        ],
      },
      {
        module: 7,
        questions: [
          {
            question:
              "A site was clear-cut. Which of these methods of regeneration cannot be used in a short time-frame?",
            options: [
              "natural regeneration",
              "artificial regeneration by direct sowing",
              "artificial regeneration by planting seedlings",
              "artificial regeneration by transplanting trees",
            ],
            answer: [0],
          },
          {
            question:
              "Average age at which a tree is considered mature for felling is called as?",
            options: [
              "crop age",
              "felling age",
              "rotation age",
              "maturity age",
            ],
            answer: [2],
          },
          {
            question:
              "Which of these is not a feature of natural regeneration?",
            options: [
              "low cost",
              "less requirement of heavy machinery and labour",
              "preservation of genetic variability",
              "good quality over genetic improvement",
            ],
            answer: [3],
          },
          {
            question: "Ring weeding is primarily a feature of?",
            options: [
              "natural regeneration",
              "assisted natural regeneration",
              "artificial regeneration by direct sowing",
              "artificial regeneration by planting seedlings",
            ],
            answer: [1],
          },
          {
            question:
              "The movement of seeds away from their place of seed production into a new area is called?",
            options: ["translocation", "migration", "dispersal", "drifting"],
            answer: [2],
          },
          {
            question:
              "Which of these is not a feature of natural regeneration?",
            options: [
              "seed consumption by insects and seed feeders",
              "little control over spacing and stand density",
              "long time needed to regenerate forest",
              "high requirement of heavy machinery and labour",
            ],
            answer: [3],
          },
          {
            question:
              "Which of these is the correct sequence of a silviculture system?",
            options: [
              "stand tending --> regeneration --> harvesting",
              "harvesting --> stand tending --> regeneration",
              "harvesting --> regeneration --> stand tending",
              "regeneration --> harvesting --> stand tending",
            ],
            answer: [2],
          },
          {
            question:
              "Which of these is not an advantage of clear felling system?",
            options: [
              "simple system, easy and efficient",
              "allows for establishment of a more uniform crop",
              "increases soil erosion and landslides in hilly areas",
              "mimics natural processes of fire and large scale insect attacks",
            ],
            answer: [2],
          },
          {
            question: "Tending is done during?",
            options: [
              "early stage of life",
              "middle stage of life",
              "late stage of life",
              "any stage of life",
            ],
            answer: [3],
          },
          {
            question: "Taungya regeneration is?",
            options: [
              "natural regeneration",
              "artificial regeneration with villagers",
              "artificial regeneration with nomadic tribes",
              "artificial regeneration with hunters and gatherers",
            ],
            answer: [1],
          },
        ],
      },
      {
        module: 8,
        questions: [
          {
            question: "Trees not putting increment are removed during?",
            options: [
              "preparatory felling",
              "seeding felling",
              "secondary felling",
              "final felling",
            ],
            answer: [0],
          },
          {
            question:
              "For a crop with rotation age 120 years, PB-III would have crop age?",
            options: [
              "0-30 years",
              "30-60 years",
              "60-90 years",
              "90-120 years",
            ],
            answer: [1],
          },
          {
            question: "Close to nature forestry is a feature of?",
            options: [
              "clear felling system",
              "selection system",
              "uniform shelterwood system",
              "group shelterwood system",
            ],
            answer: [1],
          },
          {
            question: "Shelterwood system results in?",
            options: [
              "even aged stand with natural aesthetics",
              "even aged stand with artificial aesthetics",
              "uneven aged stand with natural aesthetics",
              "uneven aged stand with artificial aesthetics",
            ],
            answer: [0],
          },
          {
            question: "Inverse - J number diameter curves are seen in?",
            options: [
              "clear felling system",
              "selection system",
              "uniform shelterwood system",
              "group shelterwood system",
            ],
            answer: [1],
          },
          {
            question: "Clear felling system is not used for?",
            options: [
              "light demanding species",
              "shade bearer species",
              "plain areas",
              "plateau areas",
            ],
            answer: [1],
          },
          {
            question:
              "Which of these is the correct sequence for shelterwood system?",
            options: [
              "preparatory felling --> secondary felling --> seedling feeling --> final felling",
              "preparatory felling --> seedling felling --> secondary felling --> final felling",
              "preparatory felling --> secondary felling --> seedling felling --> final felling",
              "preparatory felling --> seeding felling --> secondary felling --> final felling",
            ],
            answer: [3],
          },
          {
            question:
              "Felling made with the object of opening the canopy to remove shelter and allow more light for the regenerated crop is?",
            options: [
              "preparatory felling",
              "seedling felling",
              "secondary felling",
              "final felling",
            ],
            answer: [2],
          },
          {
            question:
              "In group shelterwood system, the regeneration areas are increased?",
            options: [
              "centrifugally around gaps",
              "centripetally around gaps",
              "parallel to gaps",
              "perpendicular to gaps",
            ],
            answer: [0],
          },
          {
            question: "Catchment areas are best suited for?",
            options: [
              "clear felling system",
              "selection system",
              "uniform shelterwood system",
              "group shelterwood system",
            ],
            answer: [1],
          },
        ],
      },
      {
        module: 9,
        questions: [
          {
            question: "Moving logs from forest to landing area is known as?",
            options: ["marking", "bucking", "skidding", "delimbing"],
            answer: [2],
          },
          {
            question: "Research plots are shown in _____ marking colour?",
            options: ["yellow", "blue", "red", "white"],
            answer: [3],
          },
          {
            question:
              "Which of these gives the greatest accuracy in constructing face cuts?",
            options: [
              "conventional face",
              "humboldt face",
              "open face",
              "all of these",
            ],
            answer: [0],
          },
          {
            question:
              "Careful selection of trees for harvesting based on a forest management prescription is known as?",
            options: ["surveying", "cruising", "marking", "logging"],
            answer: [2],
          },
          {
            question:
              "Surveying timberlands to locate and estimate the volumes and grades of standing timber meeting requirements is known as?",
            options: ["surveying", "cruising", "marking", "logging"],
            answer: [1],
          },
          {
            question: "Trees on the boundary are shown in ____ marking colour?",
            options: ["yellow", "blue", "red", "white"],
            answer: [2],
          },
          {
            question: "Cutting of timber into logs is known as?",
            options: ["marking", "bucking", "skidding", "delimbing"],
            answer: [1],
          },
          {
            question: "Which of these gives the greatest saving of lumber?",
            options: [
              "conventional face",
              "humboldt face",
              "open face",
              "all of these",
            ],
            answer: [1],
          },
          {
            question:
              "Trees to be retained are shown in ______ marking colour?",
            options: ["yellow", "blue", "red", "white"],
            answer: [1],
          },
          {
            question: "Net growth in initial volume is given by?",
            options: [
              "V2 - V1",
              "V2 - V1 + H + I",
              "V2 - V1 + H + 1 + M",
              "V2 - V1 + H - 1 - M",
            ],
            answer: [1],
          },
        ],
      },
      {
        module: 10,
        questions: [
          {
            question: "Shell cracking of seeds is used for which species?",
            options: ["amla", "mango", "ber", "teak"],
            answer: [2],
          },
          {
            question:
              "Wet and dry treatment of seeds is used for which species?",
            options: ["amla", "mango", "ber", "teak"],
            answer: [3],
          },
          {
            question: "Agave is used for?",
            options: [
              "barbed wire fencing",
              "live fencing",
              "chain link fencing",
              "stone wall fencing",
            ],
            answer: [1],
          },
          {
            question:
              "Which of these is not a laboratory method to determine the best days for seed collection?",
            options: [
              "maximum dry weight",
              "colour of fruits",
              "moisture contents of fruits",
              "chemical analysis of fat and nitrogen content",
            ],
            answer: [1],
          },
          {
            question: "Which of these characterizes a refractory site?",
            options: [
              "soil depth < 10cm",
              "soil depth 10-30cm",
              "soil depth > 30cm",
              "none of these",
            ],
            answer: [0],
          },
          {
            question: "Which of these is a good storage condition?",
            options: [
              "high moisture, high temperature",
              "high moisture, low temperature",
              "low moisture, high temperature",
              "low moisture, low temperature",
            ],
            answer: [3],
          },
          {
            question: "Which of these prevents water logging?",
            options: ["sunken bed", "raised bed", "flat bed", "all of these"],
            answer: [1],
          },
          {
            question: "Choice of spacing is dependent upon?",
            options: [
              "objective of plantation",
              "site-species matching",
              "growth rate",
              "all of these",
            ],
            answer: [3],
          },
          {
            question: "Which of these conserves moisture?",
            options: ["sunken bed", "raised bed", "flat bed", "all of these"],
            answer: [0],
          },
          {
            question:
              "Number of seeds in sample that germinate up to the peak germination period expressed as % is a definition of?",
            options: [
              "germination number",
              "germination percentage",
              "germination energy",
              "germination power",
            ],
            answer: [2],
          },
        ],
      },
      {
        module: 11,
        questions: [
          {
            question:
              "The tiger has a home range of several square kilometres, regulates the ecosystem through controlling herbivore populations and trophic cascades, and people come to tiger reserves to watch tigers. Thus, the tiger can be called as?",
            options: [
              "umbrella species",
              "keystone species",
              "flagship species",
              "all of the above",
            ],
            answer: [3],
          },
          {
            question: "Zoo is an example of?",
            options: [
              "in-situ conservation",
              "ex-situ conservation",
              "in-situ preservation",
              "ex-situ preservation",
            ],
            answer: [1],
          },
          {
            question:
              "Sustainable harvest of resources falls under the category of?",
            options: [
              "conservation",
              "preservation",
              "environmentalism",
              "none of the above",
            ],
            answer: [0],
          },
          {
            question:
              "We prefer those areas for the creation of a conservation reserve where the level of threat is?",
            options: ["very high", "medium", "very low", "non-existent"],
            answer: [1],
          },
          {
            question: "Captive breeding is an example of?",
            options: [
              "in-situ conservation",
              "ex-situ conservation",
              "in-situ preservation",
              "ex-situ preservation",
            ],
            answer: [1],
          },
          {
            question:
              "Which of these is not a forest classification as per the 1894 forest policy?",
            options: [
              "protection forest",
              "production forest",
              "minor forest",
              "major forest",
            ],
            answer: [3],
          },
          {
            question:
              "In 1931, Van panchayats were constituted in areas that are now in?",
            options: [
              "Tamil Nadu",
              "Madhya Pradesh",
              "West Bengal",
              "Uttarakhand",
            ],
            answer: [3],
          },
          {
            question: "Planting along canal banks is a part of?",
            options: [
              "farm forestry",
              "community forestry",
              "extension forestry",
              "agroforestry",
            ],
            answer: [2],
          },
          {
            question:
              "The fig tree bears fruits in time when animals do not have much access to food. In this context, it would be a good example of?",
            options: [
              "least concern species",
              "keystone species",
              "flagship species",
              "extinct species",
            ],
            answer: [1],
          },
          {
            question:
              "The elephant has a home range of several square kilometres, regulates the ecosystem by its habit of destruction feeding, and people can relate to this animal which is important for conservation. Given this background, the elephant can be called as?",
            options: [
              "umbrella species",
              "keystone species",
              "flagship species",
              "all of the above",
            ],
            answer: [3],
          },
        ],
      },
      {
        module: 12,
        questions: [
          {
            question:
              "A tree has a DBH of 35cm. Find the basal area in square meters.",
            options: [".049", ".096", ".149", ".195"],
            answer: [1],
          },
          {
            question:
              "In a triangle, the angle between the base and the hypotenuse theta = 60 degrees, and the hypotenuse c = 4cm. Find the length of the base b.",
            options: ["0.66", "1", "1.5", "2"],
            answer: [3],
          },
          {
            question: `"Allowing some places and some creatures to exist without significant human interference" is a definition of?`,
            options: [
              "conservation",
              "preservation",
              "environmentalism",
              "all of these",
            ],
            answer: [1],
          },
          {
            question: "In India, the breast height is considered to be?",
            options: ["1.37m", "1.47m", "1.57m", "2.47m"],
            answer: [0],
          },
          {
            question:
              "The term 'laterite soil' is derived from Latin 'later' which means?",
            options: ["red", "brick", "fertile", "infertile"],
            answer: [1],
          },
          {
            question: "Which of these is not a non-use value?",
            options: [
              "direct value",
              "existence value",
              "altruistic value",
              "bequest value",
            ],
            answer: [0],
          },
          {
            question: `"Science of the relationship between organisms and their environments" is the definition of?`,
            options: [
              "conservation",
              "preservation",
              "environmentalism",
              "ecology",
            ],
            answer: [3],
          },
          {
            question: "Self-ploughing character is seen in?",
            options: [
              "black cotton soil",
              "alluvial soil",
              "saline soil",
              "red and yellow soil",
            ],
            answer: [0],
          },
          {
            question: "Mechanical action of ocean waves is an example of?",
            options: [
              "chemical weathering",
              "physical weathering",
              "biological weathering",
              "none of the above",
            ],
            answer: [1],
          },
          {
            question: "Lithosere is an example of?",
            options: ["hydrosere", "xerosere", "psammosere", "halosere"],
            answer: [1],
          },
        ],
      },
    ],
  },
];

export default courseQuestions;
