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
  {
    courseId: 2,
    course_name: "Conservation Economics",
    data: [
      {
        module: 1,
        questions: [
          {
            question: "In the word root for Economics, nemein stands for",
            options: ["together", "to keep", "house", "manage"],
            answer: [3],
          },
          {
            question: "Phillips curve shows the relation between",
            options: [
              "profit and loss",
              "marked price and selling price",
              "inflation rate and unemployment rate",
              "electricity consumption and heat output",
            ],
            answer: [2],
          },
          {
            question:
              '"The ability of an individual to own and exercise control over scarce resources" is a definition of',
            options: [
              "property rights",
              "resource rights",
              "individual rights",
              "social rights",
            ],
            answer: [0],
          },
          {
            question:
              '"Something that induces a person to act" is a definition of',
            options: ["enticement", "attraction", "incentive", "occupation"],
            answer: [2],
          },
          {
            question:
              "Whatever must be given up to obtain some item is a definition of",
            options: [
              "explicit costs",
              "implicit costs",
              "opportunity costs",
              "phantom costs",
            ],
            answer: [2],
          },
          {
            question:
              '"The ability of a single economic actor (or small group of actors) to have a substantial influence on market prices" is known as',
            options: [
              "price power",
              "market power",
              "externality",
              "economic power",
            ],
            answer: [1],
          },
          {
            question: "Input costs that require an outlay of money are",
            options: [
              "explicit costs",
              "implicit costs",
              "opportunity costs",
              "phantom costs",
            ],
            answer: [0],
          },
          {
            question:
              "The property of society getting the most it can from its scarce resources is a definition of",
            options: ["efficiency", "equality", "prudence", "sustainability"],
            answer: [0],
          },
          {
            question: "In the word root for conservation, con stands for",
            options: ["together", "to keep", "house", "manage"],
            answer: [0],
          },
          {
            question:
              '"The ability to produce a good at a lower opportunity cost than another producer" is a definition of',
            options: [
              "real advantage",
              "monetary advantage",
              "comparative advantage",
              "opportunity advantage",
            ],
            answer: [2],
          },
        ],
      },
      {
        module: 2,
        questions: [
          {
            question:
              "The book 'An Essay on the Principles of Population' was written by",
            options: ["Darwin", "Malthus", "Spencer", "Owens"],
            answer: [1],
          },
          {
            question:
              "The Trinity explosion of 1945 is taken as the beginning of the",
            options: ["Holocene", "Cenocene", "Anthropocene", "Eocene"],
            answer: [2],
          },
          {
            question: "The demographic transition sees a society move from",
            options: [
              "High birth rate, low death rate to low birth rate, high death rate",
              "Low birth rate, high death rate to low birth rate, low death rate",
              "High birth rate, high death rate to low birth rate, low death rate",
              "High birth rate, high death rate to low birth rate, high death rate",
            ],
            answer: [2],
          },
          {
            question: "Which of these is a preventive check by Malthus?",
            options: ["Foresight", "Vice", "Misery", "Flood"],
            answer: [0],
          },
          {
            question: "According to the Malthusian model",
            options: [
              "Population grows in geometric progression, food supply increases in arithmetic progression",
              "Population grows in geometric progression, food supply increases in geometric progression",
              "Population grows in arithmetic progression, food supply increases in arithmetic progression",
              "Population grows in geometric progression, food supply increases in geometric progression",
            ],
            answer: [0],
          },
          {
            question: "Which of these is not a pillar of sustainability?",
            options: [
              "Environmental sustainability",
              "Economic sustainability",
              "Trans-boundary sustainability",
              "Social sustainability",
            ],
            answer: [2],
          },
          {
            question:
              "Which of these is a positive check according to Malthus?",
            options: ["Late marriage", "War", "Celibacy", "Moral restraint"],
            answer: [1],
          },
          {
            question: "The quantum of human impacts can be written as",
            options: [
              "I = P + A + T",
              "I = P X A + T",
              "I = P X A X T",
              "I = P + A X T",
            ],
            answer: [2],
          },
          {
            question: "Which of these is a pillar of sustainability?",
            options: [
              "Social sustainability",
              "Industrial sustainability",
              "Agricultural sustainability",
              "Trans-boundary sustainability",
            ],
            answer: [0],
          },
          {
            question: "The logistic growth equation curve is",
            options: ["I-shaped", "J-shaped", "S-shaped", "U-shaped"],
            answer: [2],
          },
        ],
      },
      {
        module: 3,
        questions: [
          {
            question:
              "Hydrocarbons derived from incomplete burning of mineral oils are",
            options: [
              "Petrogenic hydrocarbons",
              "Pyrogenic hydrocarbons",
              "Biogenic hydrocarbons",
              "Chemoenic hydrocarbons",
            ],
            answer: [1],
          },
          {
            question:
              "When an organism absorbs a toxic substance into its tissues at a rate greater than that at which the substance is lost, we get",
            options: [
              "Bioavailability",
              "Bioaccumulation",
              "Biomagnification",
              "Bioresponse",
            ],
            answer: [1],
          },
          {
            question: "Which of these is not a climatic forcing for Earth?",
            options: [
              "Changes in plate tectonics",
              "Changes in Earth's orbit",
              "Changes in Sun's orbit",
              "Changes in Sun's strength",
            ],
            answer: [2],
          },
          {
            question:
              "The increasing concentration of a substance, such as a toxic chemical, in the tissue of tolerant organisms at successively higher levels in a food chain is called",
            options: [
              "Bioavailability",
              "Bioaccumulation",
              "Biomagnification",
              "Bioresponse",
            ],
            answer: [2],
          },
          {
            question:
              "The extent to which a chemical substance is available for uptake into an organism is",
            options: [
              "Bioavailability",
              "Bioaccumulation",
              "Biomagnification",
              "Bioresponse",
            ],
            answer: [0],
          },
          {
            question:
              "Because of climate change, Mudumalai Tiger Reserve is suffering from frequent droughts. The management has built several artificial water holes for animals and fills them up regularly with tankers. In the context of climate change, such an action would be called",
            options: [
              "Adaptation",
              "Mitigation",
              "Deceleration",
              "Maladaptation",
            ],
            answer: [0],
          },
          {
            question:
              "The government came up with a regulation that incandescent bulbs be replaced by LED bulbs, so the electricity consumption, and release of carbon dioxide from power plants are reduced. In the context of climate change, such an action would be called",
            options: [
              "Adaptation",
              "Mitigation",
              "Deceleration",
              "Maladaptation",
            ],
            answer: [1],
          },
          {
            question:
              "A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled up with soil and species of deciduous forest planted again. This is an example of",
            options: ["Recovery", "Restoration", "Enhancement", "Replacement"],
            answer: [1],
          },
          {
            question:
              "Hydrocarbons derived from biological processes acting on mineral oils are",
            options: [
              "Petrogenic hydrocarbons",
              "Pyogenic hydrocarbons",
              "Biogenic hydrocarbons",
              "Chemoenic hydrocarbons",
            ],
            answer: [2],
          },
          {
            question: "Which of these is not an impact of toxic chemicals?",
            options: [
              "Lethal effects",
              "Sub-lethal effects",
              "Reduction of existing stressors",
              "Reduced fecundity",
            ],
            answer: [2],
          },
        ],
      },
      {
        module: 4,
        questions: [
          {
            question:
              "The movement of lions across the Gir landscape is an example of",
            options: [
              "Diffusion",
              "Secular dispersal",
              "Jump dispersal",
              "Drifting",
            ],
            answer: [0],
          },
          {
            question:
              "The regular seasonal movement of animals, often along fixed routes is called",
            options: ["Translocation", "Migration", "Dispersal", "Drifting"],
            answer: [1],
          },
          {
            question:
              "The movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called",
            options: ["Translocation", "Migration", "Dispersal", "Drifting"],
            answer: [2],
          },
          {
            question: "Scarcity of food is a",
            options: [
              "Chemical factor",
              "Demographic factor",
              "Push factor",
              "Pull factor",
            ],
            answer: [2],
          },
          {
            question:
              '"The geographical distribution of species will be controlled by that environmental factor for which the organism has the narrowest range of tolerance." This is the statement for',
            options: [
              "Liebig's law of the minimum",
              "Liebig's law of the maximum",
              "Shelford's law of tolerance",
              "Shelford's law of intolerance",
            ],
            answer: [2],
          },
          {
            question: "Which of these is a deterministic factor?",
            options: [
              "Environmental variation",
              "Forest fire",
              "Death rate",
              "Diseases",
            ],
            answer: [2],
          },
          {
            question: "Which of these is a stochastic factor?",
            options: [
              "Birth rate",
              "Death rate",
              "Population structure",
              "Environmental fluctuation",
            ],
            answer: [3],
          },
          {
            question: "A root zone treatment plant is an example of",
            options: [
              "Phytoremediation",
              "Biological control",
              "Biomagnification",
              "Bioaccumulation",
            ],
            answer: [0],
          },
          {
            question:
              "Which of these correctly represents the process of habitat fragmentation and loss?",
            options: [
              "Original forest --> Dissection --> Perforation --> Fragmentation --> Attrition",
              "Original forest --> Dissection --> Attrition --> Fragmentation --> Perforation",
              "Original forest --> Dissection --> Perforation --> Attrition --> Fragmentation",
              "Original forest --> Dissection --> Fragmentation --> Perforation --> Attrition",
            ],
            answer: [0],
          },
          {
            question:
              '"The rate of any biological process is limited by that factor in least amount relative to requirement, so there is a single limiting factor." This is the statement for',
            options: [
              "Liebig's law of the minimum",
              "Liebig's law of the maximum",
              "Shelford's law of tolerance",
              "Shelford's law of intolerance",
            ],
            answer: [0],
          },
        ],
      },
      {
        module: 5,
        questions: [
          {
            question:
              '"If private parties can bargain without cost over the allocation of resources, they can solve the problem of externalities on their own." This is a statement for',
            options: [
              "Allocation theorem",
              "Phillips theorem",
              "Coase theorem",
              "Nash theorem",
            ],
            answer: [2],
          },
          {
            question:
              "Which of these is not a method of internalization of externalities?",
            options: [
              "Tradable pollution permits",
              "Charities to social causes",
              "Command and control policies",
              "Free market",
            ],
            answer: [3],
          },
          {
            question: "Common resource goods are",
            options: [
              "Excludable, rival in consumption",
              "Non-excludable, rival in consumption",
              "Excludable, non-rival in consumption",
              "Non-excludable, non-rival in consumption",
            ],
            answer: [1],
          },
          {
            question:
              '"A simplified description, especially a mathematical one, of a system or process, to assist calculations and predictions" is a definition of a/an',
            options: ["Equation", "Model", "Philosophy", "Process dynamics"],
            answer: [1],
          },
          {
            question:
              '"A visual model of the economy that shows how money through markets among households and firms" is',
            options: [
              "Phillips curve",
              "Laffer's curve",
              "Circular flow diagram",
              "Production possibilities frontier",
            ],
            answer: [2],
          },
          {
            question: "Club goods are",
            options: [
              "Excludable, rival in consumption",
              "Non-excludable, rival in consumption",
              "Excludable, non-rival in consumption",
              "Non-excludable, non-rival in consumption",
            ],
            answer: [2],
          },
          {
            question: "Public goods are",
            options: [
              "Excludable, rival in consumption",
              "Non-excludable, rival in consumption",
              "Excludable, non-rival in consumption",
              "Non-excludable, non-rival in consumption",
            ],
            answer: [3],
          },
          {
            question: "National defense is",
            options: [
              "Private good",
              "Club good",
              "Common resource",
              "Public good",
            ],
            answer: [3],
          },
          {
            question: "Environment is",
            options: [
              "Private good",
              "Club good",
              "Common resource",
              "Public good",
            ],
            answer: [2],
          },
          {
            question:
              '"A measure of the responsiveness of quantity demanded or quantity supplied to a change in one of its determinants" is',
            options: [
              "Elasticity",
              "Responsivity",
              "Demand-supply equilibrium",
              "Pricing",
            ],
            answer: [0],
          },
        ],
      },
      {
        module: 6,
        questions: [
          {
            question:
              '"A legal minimum on the price at which a good can be sold" is',
            options: [
              "Price ceiling",
              "Price floor",
              "Selling ceiling",
              "Selling floor",
            ],
            answer: [1],
          },
          {
            question: "Rice and wheat are",
            options: [
              "Substitutes",
              "Complements",
              "Club goods",
              "Public goods",
            ],
            answer: [0],
          },
          {
            question:
              '"A legal maximum on the price at which a good can be sold" is',
            options: [
              "Price ceiling",
              "Price floor",
              "Selling ceiling",
              "Selling floor",
            ],
            answer: [0],
          },
          {
            question:
              '"A measure of how much the quantity demanded of one good responds to a change in the price of another good, computed as the percentage change in quantity demanded of the first good divided by the percentage change in price of the second good" is',
            options: [
              "Price elasticity of demand",
              "Income elasticity of demand",
              "Cross-price elasticity of demand",
              "Price elasticity of supply",
            ],
            answer: [2],
          },
          {
            question:
              '"A good for which, other things being equal, an increase leads to a decrease in demand" is',
            options: [
              "Normal good",
              "Inferior good",
              "Griffen good",
              "Common good",
            ],
            answer: [1],
          },
          {
            question: "Coffee powder and sugar are",
            options: [
              "Substitutes",
              "Complements",
              "Club goods",
              "Public goods",
            ],
            answer: [1],
          },
          {
            question:
              '"A graph of relationship between the price of a good and the quantity demanded" is',
            options: [
              "Demand curve",
              "Supply curve",
              "Laffer's curve",
              "Phillips curve",
            ],
            answer: [0],
          },
          {
            question:
              '"A measure of how the quantity supplied of a good responds to a change in the price of that good, computed as the percentage change in quantity supplied divided by the percentage change in price" is',
            options: [
              "Price elasticity of demand",
              "Income elasticity of demand",
              "Cross-price elasticity of demand",
              "Price elasticity of supply",
            ],
            answer: [3],
          },
          {
            question:
              '"A graph of the relationship between the price of a good and the quantity supplied" is',
            options: [
              "Demand curve",
              "Supply curve",
              "Laffer's curve",
              "Phillips curve",
            ],
            answer: [1],
          },
          {
            question:
              '"The claim that, other things being equal, the quantity supplied of a good rises when the price of the good rises" is a statement of',
            options: [
              "Law of demand",
              "Law of supply",
              "Law of quantity demanded",
              "Law of quantity supplied",
            ],
            answer: [1],
          },
        ],
      },
      {
        module: 7,
        questions: [
          {
            question:
              "The area between the supply curve and the price is an indicator of",
            options: [
              "Consumer surplus",
              "Producer surplus",
              "Total surplus",
              "Deadweight loss",
            ],
            answer: [1],
          },
          {
            question: "Value to buyers - cost to sellers is",
            options: [
              "Consumer surplus",
              "Producer surplus",
              "Total surplus",
              "Deadweight loss",
            ],
            answer: [2],
          },
          {
            question:
              '"The fall in total surplus that results from a market distortion, such as a tax" is',
            options: [
              "Consumer surplus",
              "Producer surplus",
              "Total surplus",
              "Deadweight loss",
            ],
            answer: [3],
          },
          {
            question: "Imposition of tariff",
            options: [
              "Increases producer surplus and government revenue",
              "Increases consumer surplus and government revenue",
              "Increases producer surplus, consumer surplus, and government revenue",
              "Increases total surplus",
            ],
            answer: [0],
          },
          {
            question:
              "The area between the demand curve and the price is an indicator of",
            options: [
              "Consumer surplus",
              "Producer surplus",
              "Total surplus",
              "Deadweight loss",
            ],
            answer: [0],
          },
          {
            question:
              '"The amount a seller is paid for a good minus the seller\'s cost of providing it" is',
            options: [
              "Consumer surplus",
              "Producer surplus",
              "Total surplus",
              "Deadweight loss",
            ],
            answer: [1],
          },
          {
            question:
              '"The price of a good that prevails in the world market for that good" is the definition of',
            options: [
              "Export price",
              "Import price",
              "World price",
              "Domestic price",
            ],
            answer: [2],
          },
          {
            question:
              '"The maximum amount that a buyer will pay for a good" is',
            options: [
              "Willingness to pay",
              "Market demand",
              "Demand curve",
              "Buyer's surplus",
            ],
            answer: [0],
          },
          {
            question: "Laffer's curve is the relationship between",
            options: [
              "Inflation and unemployment",
              "Tax size and tax revenue",
              "Producer surplus and consumer surplus",
              "Tax size and deadweight loss",
            ],
            answer: [1],
          },
          {
            question:
              '"The amount a buyer is willing to pay for a good minus the amount the buyer actually pays for it" is',
            options: [
              "Consumer surplus",
              "Producer surplus",
              "Total surplus",
              "Deadweight loss",
            ],
            answer: [0],
          },
        ],
      },
      {
        module: 8,
        questions: [
          {
            question: "For a positive consumption externality,",
            options: [
              "SMC = PMC + MD",
              "SMC = PMC - MD",
              "SMC = PMC",
              "SMC = PMC - MB",
            ],
            answer: [2],
          },
          {
            question: "For a negative consumption externality,",
            options: [
              "SMB = PMB",
              "SMB = PMB - MD",
              "SMB = PMB + MB",
              "SMC = PMC / MD",
            ],
            answer: [1],
          },
          {
            question: "For a negative production externality,",
            options: [
              "SMC = PMC + MD",
              "SMC = PMC - MD",
              "SMC = PMC",
              "SMC = PMC - MB",
            ],
            answer: [0],
          },
          {
            question: "Partying with loud noises is an example of",
            options: [
              "Negative production externality",
              "Positive production externality",
              "Negative consumption externality",
              "Positive consumption externality",
            ],
            answer: [2],
          },
          {
            question: "For a positive consumption externality,",
            options: [
              "SMB = PMB",
              "SMB = PMB - MD",
              "SMB = PMB + MB",
              "SMC = PMC / MD",
            ],
            answer: [2],
          },
          {
            question:
              "When a firm's production reduces the well-being of others who are not compensated by the firm, we have",
            options: [
              "Negative production externality",
              "Positive production externality",
              "Negative consumption externality",
              "Positive consumption externality",
            ],
            answer: [0],
          },
          {
            question:
              "When an individual's consumption reduces the well-being of others who are not compensated by the individual, we have",
            options: [
              "Negative production externality",
              "Positive production externality",
              "Negative consumption externality",
              "Positive consumption externality",
            ],
            answer: [2],
          },
          {
            question: "For a positive production externality,",
            options: [
              "SMB = PMB",
              "SMB = PMB - MD",
              "SMB = PMB + MB",
              "SMC = PMC / MD",
            ],
            answer: [0],
          },
          {
            question:
              "Loss of ecosystem services due to mining is an example of",
            options: [
              "Negative production externality",
              "Positive production externality",
              "Negative consumption externality",
              "Positive consumption externality",
            ],
            answer: [0],
          },
        ],
      },
      {
        module: 9,
        questions: [
          {
            question:
              '"Costs that have already been committed and cannot be recovered" are',
            options: [
              "Fixed costs",
              "Variable costs",
              "Marginal costs",
              "Sunk costs",
            ],
            answer: [3],
          },
          {
            question:
              '"The increase in output that arises from an additional unit of input" is',
            options: [
              "Marginal product",
              "Marginal profit",
              "Marginal loss",
              "Marginal cost",
            ],
            answer: [0],
          },
          {
            question:
              '"Total revenue minus total explicit cost" is a definition of',
            options: ["Economic profit", "Accounting profit", "Profit", "Loss"],
            answer: [1],
          },
          {
            question: "Which of the following is true for a competitive firm?",
            options: ["P > MR", "P > MC", "MR > MC", "MR = MC"],
            answer: [3],
          },
          {
            question:
              '"The increase in total cost that arises from an extra unit of production" are',
            options: [
              "Fixed costs",
              "Variable costs",
              "Marginal costs",
              "Sunk costs",
            ],
            answer: [2],
          },
          {
            question:
              '"The market value of the inputs a firm uses in production" is a definition of',
            options: ["Total revenue", "Total cost", "Profit", "Loss"],
            answer: [1],
          },
          {
            question:
              '"The amount a firm receives for the sale of its output" is a definition of',
            options: ["Total revenue", "Total cost", "Profit", "Loss"],
            answer: [0],
          },
          {
            question: "Which of the following is true for monopoly?",
            options: ["P > MR", "MR > MC", "MC > P", "MC > MR"],
            answer: [0],
          },
          {
            question: "A monopolist firm's profit is given by",
            options: [
              "(price - ATC) x Q",
              "(price x Q) x ATC",
              "(ATC - Q) x price",
              "price x Q - ATC",
            ],
            answer: [0],
          },
          {
            question:
              '"Costs that vary with the quantity of output produced" are',
            options: [
              "Fixed costs",
              "Variable costs",
              "Marginal costs",
              "Sunk costs",
            ],
            answer: [1],
          },
        ],
      },
      {
        module: 10,
        questions: [
          {
            question:
              '"A difference in wages that arises to offset the non-mandatory characteristics of different jobs" is known as',
            options: [
              "Differentiating differential",
              "Compensating differential",
              "Differentiating integral",
              "Compensating integral",
            ],
            answer: [1],
          },
          {
            question:
              '"The increase in the amount of output from an additional unit of labor" is',
            options: [
              "Marginal product of labour",
              "Marginal product of input",
              "Average product of labour",
              "Average product of input",
            ],
            answer: [0],
          },
          {
            question: "Absolute poverty depends",
            options: [
              "On income but not on access to social services",
              "Not on income but on access to social services",
              "On income and on access to social services",
              "Neither on income nor on access to social services",
            ],
            answer: [2],
          },
          {
            question:
              '"A condition where a household\'s income is lower than the median income in the particular country" is known as',
            options: [
              "Absolute poverty",
              "Relative poverty",
              "Median poverty",
              "Poverty line",
            ],
            answer: [1],
          },
          {
            question:
              '"The political philosophy according to which the government should punish crimes and enforce voluntary agreements but not redistribute income" is',
            options: [
              "Utilitarianism",
              "Liberalism",
              "Libertarianism",
              "Socialism",
            ],
            answer: [2],
          },
          {
            question:
              '"The inputs used to produce goods and services" are known as',
            options: [
              "Factors of input",
              "Factors of production",
              "Factors of industry",
              "Factors of market",
            ],
            answer: [1],
          },
          {
            question:
              '"A condition characterized by severe deprivation of basic human needs, including food, safe drinking water, sanitation facilities, health, shelter, education, and information" is known as',
            options: [
              "Absolute poverty",
              "Relative poverty",
              "Median poverty",
              "Poverty line",
            ],
            answer: [0],
          },
          {
            question:
              '"An absolute level of income set by the government for each family size below which a family is deemed to be in poverty" is known as',
            options: [
              "Deprivation line",
              "Poverty line",
              "Deprivation index",
              "Poverty index",
            ],
            answer: [1],
          },
          {
            question:
              '"Government policy aimed at protecting people against the risk of adverse events" is',
            options: [
              "Social protection",
              "Social insurance",
              "Social security",
              "Socialism",
            ],
            answer: [1],
          },
          {
            question:
              '"Above-equilibrium wages paid by firms to increase worker productivity" are known as',
            options: [
              "Compensating wage",
              "Efficiency wage",
              "Productivity wage",
              "Retention wage",
            ],
            answer: [1],
          },
        ],
      },
      {
        module: 11,
        questions: [
          {
            question:
              '"Apple\'s iPod is good, so Apple should be good for other devices as well." This is an example of',
            options: [
              "Confirmation bias",
              "Halo effect",
              "Horn effect",
              "Priming",
            ],
            answer: [1],
          },
          {
            question:
              '"Those resources that have been surveyed but we lack the technology to use them" are',
            options: [
              "Potential resources",
              "Actual resources",
              "Reserve resources",
              "Stock resources",
            ],
            answer: [3],
          },
          {
            question: "Hydrogen for nuclear fusion is an example of",
            options: [
              "Potential resource",
              "Actual resource",
              "Reserve resource",
              "Stock resource",
            ],
            answer: [3],
          },
          {
            question:
              '"The part of actual resource that can be developed profitably in the future" are',
            options: [
              "Potential resources",
              "Actual resources",
              "Reserve resources",
              "Stock resources",
            ],
            answer: [2],
          },
          {
            question:
              '"An action taken by an uninformed party to induce an informed party to reveal information" is known as',
            options: ["Signalling", "Screening", "Informing", "Heuristics"],
            answer: [1],
          },
          {
            question:
              '"The rate at which a consumer is willing to trade one good for another" is known as',
            options: [
              "Marginal rate substitution",
              "Marginal rate of exchange",
              "Marginal rate of trade",
              "Marginal rate of transfer",
            ],
            answer: [0],
          },
          {
            question:
              '"Mental shortcut using emotion (gut feeling) to influence the decision" is',
            options: [
              "Affect heuristic",
              "Availability heuristic",
              "Effort heuristic",
              "Familiarity heuristic",
            ],
            answer: [0],
          },
          {
            question:
              '"An action taken by an informed party to reveal private information to an uninformed party" is known as',
            options: ["Signalling", "Screening", "Informing", "Heuristics"],
            answer: [0],
          },
          {
            question: '"Those resources that may be used in the future" are',
            options: [
              "Potential resources",
              "Actual resources",
              "Reserve resources",
              "Stock resources",
            ],
            answer: [0],
          },
          {
            question:
              '"Mental shortcut justifying increased investment in a decision prior investment was made" is',
            options: [
              "Affect heuristic",
              "Availability heuristic",
              "Effort heuristic",
              "Escalation of commitment",
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
              "As per Wildlife Protection Act 1972 (WPA 1972), wildlife includes any animal, aquatic or land vegetation which forms part of any ______",
            options: ["Ecosystem", "State", "Country", "Habitat"],
            answer: [3],
          },
          {
            question: "Zoo is an example of",
            options: [
              "In-situ conservation",
              "Ex-situ conservation",
              "In-situ preservation",
              "Ex-situ preservation",
            ],
            answer: [1],
          },
          {
            question:
              "People come to Sessa Orchid Sanctuary in Arunachal Pradesh to witness orchids, which in this context would be classified as",
            options: [
              "Umbrella species",
              "Keystone species",
              "Flagship species",
              "Extinct species",
            ],
            answer: [2],
          },
          {
            question: "Soil formation is an example of",
            options: [
              "Provisioning service",
              "Regulating service",
              "Supporting service",
              "Cultural service",
            ],
            answer: [2],
          },
          {
            question: "Captive breeding is an example of",
            options: [
              "In-situ conservation",
              "Ex-situ conservation",
              "In-situ preservation",
              "Ex-situ preservation",
            ],
            answer: [1],
          },
          {
            question: "Nutrient cycling is an example of",
            options: [
              "Provisioning service",
              "Regulating service",
              "Supporting service",
              "Cultural service",
            ],
            answer: [2],
          },
          {
            question:
              "The fig tree bears fruits in times when animals do not have much access to food. In this context, it would be a good example of",
            options: [
              "Least concern species",
              "Keystone species",
              "Flagship species",
              "Extinct species",
            ],
            answer: [1],
          },
          {
            question:
              "We prefer those areas for the creation of a conservation reserve where the level of threat is",
            options: ["Very high", "Medium", "Very low", "Non-existent"],
            answer: [1],
          },
          {
            question: "Supply of medicines is an example of",
            options: [
              "Provisioning service",
              "Regulating service",
              "Supporting service",
              "Cultural service",
            ],
            answer: [0],
          },
          {
            question: "Religious benefits are an example of",
            options: [
              "Provisioning service",
              "Regulating service",
              "Supporting service",
              "Cultural service",
            ],
            answer: [3],
          },
        ],
      },
    ],
  },
  {
    courseId: 3,
    course_name: "Ecology and Biology",
    data: [
      {
        module: 1,
        questions: [
          {
            question: "Enquiry into plants is a book written by",
            options: ["Theophrastus", "Linnaeus", "Malthus", "Humboldt"],
            answer: [0],
          },
          {
            question: "In the Greek word root of Ecology, Oikos refers to",
            options: ["household", "preservation", "environment", "study"],
            answer: [0],
          },
          {
            question: "In the Greek word root of Ecology, logos refers to",
            options: ["household", "preservation", "environment", "study"],
            answer: [3],
          },
          {
            question:
              "Ecology is the scientific study of interactions among organisms and their_____",
            options: ["habitat", "niche", "environment", "population"],
            answer: [2],
          },
          {
            question:
              "Who amongst these is considered the father of Biogeography?",
            options: ["Theophrastus", "Linnaeus", "Malthus", "Humboldt"],
            answer: [3],
          },
          {
            question: "Which of these is not a characteristics of fitness?",
            options: [
              "Fitness is environment-specific.",
              "Fitness is species-specific.",
              "Higher reproductive rate means higher fitness.",
              "Fitness should be measured across several generations.",
            ],
            answer: [2],
          },
          {
            question: "Which of these is not a kind of selection?",
            options: ["directional", "stochastic", "disruptive", "stabilising"],
            answer: [1],
          },
          {
            question:
              "Ecology is the scientific study of _______that determine the distribution and abundance of organisms.",
            options: ["statics", "interactions", "dynamics", "habitat"],
            answer: [1],
          },
          {
            question: "Which of these is not a characteristic of fitness?",
            options: [
              "Fitness is environment-specific.",
              "Fitness is species-specific.",
              "Fitness works on traits such as size and speed.",
              "Fitness should be measured across several generations.",
            ],
            answer: [2],
          },
          {
            question: "Which of these is not a step in natural selection?",
            options: [
              "variation",
              "underpopulation",
              "struggle for existence",
              "survival of the fittest",
            ],
            answer: [1],
          },
        ],
      },
      {
        module: 2,
        questions: [
          {
            question:
              "Hierarchy emerges almost inevitably through a wide variety of evolutionary processes, for the simple reason that hierarchical structures are _____",
            options: ["perfect", "imperfect", "stable", "unstable"],
            answer: [2],
          },
          {
            question: "The mitochondrion is a/an",
            options: ["sub-cellular organelle", "cell", "tissue", "organ"],
            answer: [0],
          },
          {
            question: "The laboratory approach to ecology uses",
            options: ["equations", "models", "observations", "experiments"],
            answer: [3],
          },
          {
            question:
              '"The diversity that exists among different geographies" is',
            options: [
              "alpha biodiversity",
              "beta biodiversity",
              "gamma biodiversity",
              "delta biodiversity",
            ],
            answer: [2],
          },
          {
            question: "The hierarchical system was given by",
            options: ["Simon", "Watson", "Hutchinson", "Humboldt"],
            answer: [0],
          },
          {
            question:
              '"Groups of actually or potentially interbreeding natural populations, which are reproductively isolated from other such species" is a definition of',
            options: ["cells", "species", "ecosystems", "biomes"],
            answer: [1],
          },
          {
            question: '"The diversity that exists within an ecosystem" is',
            options: [
              "alpha biodiversity",
              "beta biodiversity",
              "gamma biodiversity",
              "delta biodiversity",
            ],
            answer: [0],
          },
          {
            question: "The emergent principle can be stated as",
            options: [
              "whole = sum of parts",
              "whole < sum of parts",
              "whole > sum of parts",
              "none of these",
            ],
            answer: [2],
          },
          {
            question: "There is more biodiversity in areas with",
            options: [
              "less competition, less predation",
              "less competition, more predation",
              "more competition, more predation",
              "more competition, less predation",
            ],
            answer: [2],
          },
          {
            question:
              "For more biodiversity, the level of disturbance should be",
            options: ["less", "intermediate", "more", "none of these"],
            answer: [1],
          },
        ],
      },
      {
        module: 3,
        questions: [
          {
            question: "Birds on giraffe are an example of",
            options: [
              "colony",
              "commensalism",
              "protocooperation",
              "allelopathy",
            ],
            answer: [2],
          },
          {
            question: "Egrets with buffaloes are an example of",
            options: [
              "colony",
              "commensalism",
              "protocooperation",
              "allelopathy",
            ],
            answer: [1],
          },
          {
            question: "The scientific study of animal behaviour is called",
            options: [
              "behaviourism",
              "ecology",
              "ethology",
              "prey-predator dynamics",
            ],
            answer: [2],
          },
          {
            question:
              "The interaction between exotic shrubs and trees through the action of seed predators is an example of",
            options: [
              "infraspecific competition",
              "apparent competition",
              "disguised competition",
              "harmonious competition",
            ],
            answer: [1],
          },
          {
            question: "Harmonious competition occurs where",
            options: [
              "at least one participant is benefited",
              "at least one participant is unharmed",
              "both participants are benefited",
              "both participants are unharmed",
            ],
            answer: [3],
          },
          {
            question: "Hamilton's rule can be stated as",
            options: ["rB < C", "rB > C", "rB = C", "rB + C = 0"],
            answer: [1],
          },
          {
            question:
              "Trampling of grass due to the movement of animals is an example of",
            options: [
              "mutualism",
              "ammensalism",
              "commensalism",
              "protocooperation",
            ],
            answer: [1],
          },
          {
            question:
              "I observe a monkey take a tick out of another monkey's head and eat it. In the social context, this behaviour would be called",
            options: [
              "tick hunting",
              "auto grooming",
              "allo grooming",
              "foraging",
            ],
            answer: [2],
          },
          {
            question:
              "An inventory of behaviours exhibited by an animal during a behaviour exercise is called",
            options: ["ecogram", "ethogram", "behaviourogram", "animalogram"],
            answer: [1],
          },
          {
            question:
              "I observe a bird take a tick out of another bird's head and eat it. In the social context, this behaviour would be called",
            options: [
              "tick hunting",
              "auto grooming",
              "allo grooming",
              "foraging",
            ],
            answer: [2],
          },
        ],
      },
      {
        module: 4,
        questions: [
          {
            question:
              "Consider the food chain grass --> grasshopper --> frog --> snake --> hawk. As we move up the food chain,",
            options: [
              "available energy decreases",
              "available energy increases",
              "available energy remains same",
              "available energy is zero everywhere",
            ],
            answer: [0],
          },
          {
            question:
              "Consider the food chain grass --> grasshopper --> frog --> snake --> hawk. In the food chain,",
            options: [
              "hawk is producer",
              "hawk is consumer and carnivore",
              "hawk is consumer and herbivore",
              "hawk is decomposer",
            ],
            answer: [1],
          },
          {
            question:
              "Trees --> birds --> parasites --> hyperparasites represent",
            options: [
              "upright pyramid of numbers",
              "inverted pyramid of numbers",
              "spindle pyramid of numbers",
              "dumb-bell pyramid of numbers",
            ],
            answer: [1],
          },
          {
            question:
              "Consider the food chain grass --> grasshopper --> frog --> snake --> hawk. In this food chain,",
            options: [
              "frog is producer",
              "frog is consumer and carnivore",
              "frog is consumer and herbivore",
              "frog is decomposer",
            ],
            answer: [1],
          },
          {
            question: "At the compensation point,",
            options: [
              "photosynthesis = respiration",
              "photosynthesis < respiration",
              "photosynthesis > respiration",
              "photosynthesis = 0",
            ],
            answer: [0],
          },
          {
            question: "Tree --> frugivorous birds --> hawk represents",
            options: [
              "upright pyramid of numbers",
              "inverted pyramid of numbers",
              "spindle pyramid of numbers",
              "dumb-bell pyramid of numbers",
            ],
            answer: [2],
          },
          {
            question: "Glacial lakes are typical examples of",
            options: [
              "eutrophic lakes",
              "hypereutrophic lakes",
              "oligotrophic lakes",
              "mesotrophic lakes",
            ],
            answer: [2],
          },
          {
            question:
              "Consider the food chain grass --> grasshopper --> frog --> snake --> hawk. In this food chain,",
            options: [
              "more numbers of hawks than grasshoppers can be supported",
              "more numbers of grasshoppers than hawks can be supported",
              "equal numbers of hawks and grasshoppers can be supported",
              "none of these",
            ],
            answer: [1],
          },
          {
            question:
              "If we all become vegetarians, we'll be able to support our large populations. This can be explained through",
            options: [
              "10% rule",
              "1% rule",
              "trophic cascades",
              "biodiversity",
            ],
            answer: [0],
          },
          {
            question: "Net primary productivity is given by",
            options: ["APAR x LUE", "APAR + LUE", "APAR - LUE", "APAR / LUE"],
            answer: [0],
          },
        ],
      },
      {
        module: 5,
        questions: [
          {
            question:
              "____ is how close the measured values are to the correct value.",
            options: ["accuracy", "precision", "bias", "variance"],
            answer: [0],
          },
          {
            question:
              "Which of these is not a measure of absolute population density?",
            options: [
              "total count",
              "pelt count",
              "capture-recapture method",
              "removal method",
            ],
            answer: [1],
          },
          {
            question: "The logistic growth equation, when plotted, appears",
            options: ["I shaped", "J shaped", "S shaped", "O shaped"],
            answer: [2],
          },
          {
            question:
              "______ employs a simple rule of selecting every kth unit starting with a number chosen at random from 1 to k as the random start.",
            options: [
              "simple random sampling",
              "systematic sampling",
              "stratified sampling",
              "multistage sampling",
            ],
            answer: [1],
          },
          {
            question:
              "The juvenile mortality rate is the annual number of deaths of juveniles per",
            options: [
              "100 births",
              "1000 births",
              "100 live births",
              "1000 live births",
            ],
            answer: [3],
          },
          {
            question:
              "The minimum replacement level fertility for a population to grow should be greater than",
            options: ["1", "2", "3", "4"],
            answer: [1],
          },
          {
            question: "Pan traps are used for sampling",
            options: [
              "bees",
              "butterflies",
              "non-pollinator insects",
              "pollinator insects",
            ],
            answer: [3],
          },
          {
            question: "Which of these is true?",
            options: [
              "physiological longevity > ecological longevity",
              "physiological longevity = ecological longevity",
              "physiological longevity < ecological longevity",
              "a or b",
            ],
            answer: [3],
          },
          {
            question:
              "A sampling procedure such that each possible combination of sampling units out of the population has the same chance of being selected is referred to as",
            options: [
              "simple random sampling",
              "systematic sampling",
              "stratified sampling",
              "multistage sampling",
            ],
            answer: [0],
          },
          {
            question: "Cover board surveys are typically used for sampling",
            options: ["herpetofauna", "fishes", "large mammals", "carnivores"],
            answer: [0],
          },
        ],
      },
      {
        module: 6,
        questions: [
          {
            question: "A climax caused by wildfires is an example of",
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
              "When compared to generalist species, specialist species have",
            options: [
              "narrower niches",
              "broader niches",
              "same-size niches",
              "none of these",
            ],
            answer: [0],
          },
          {
            question:
              "Which of these depicts correctly the lithosere primary succession?",
            options: [
              "rock --> crustose lichen --> foliose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax",
              "rock --> foliose lichen --> crustose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax",
              "moss --> crustose lichen --> foliose lichen --> rock --> herbaceous stage --> shrub --> woodland --> climax",
              "rock --> crustose lichen --> foliose lichen --> shrub --> herbaceous stage --> moss --> woodland --> climax",
            ],
            answer: [0],
          },
          {
            question: "Importance value can be written as",
            options: [
              "relative density + relative frequency X relative dominance",
              "relative density X relative frequency + relative dominance",
              "relative density + relative frequency + relative dominance",
              "relative density X relative frequency X relative dominance",
            ],
            answer: [2],
          },
          {
            question: "Lithosere is an example of",
            options: ["hydrosere", "xerosere", "psammosere", "halosere"],
            answer: [1],
          },
          {
            question: "Importance value varies from",
            options: ["0 to 10", "0 to 50", "0 to 100", "0 to 300"],
            answer: [3],
          },
          {
            question:
              "A species found most frequently in a particular community, but also present occasionally in others is called",
            options: [
              "accidental species",
              "indifferent species",
              "selective species",
              "exclusive species",
            ],
            answer: [2],
          },
          {
            question:
              "The climax near Tindi village is being controlled by disturbance by cattle. This is an example of",
            options: [
              "climatic climax",
              "edaphic climax",
              "disclimax",
              "catastrophic climax",
            ],
            answer: [2],
          },
          {
            question: "Which of these is correct?",
            options: [
              "fundamental niche > realised niche",
              "fundamental niche = realised niche",
              "fundamental niche < realised niche",
              "a or b",
            ],
            answer: [3],
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
        ],
      },
      {
        module: 7,
        questions: [
          {
            question:
              "I tried growing vegetables under my teak plantation, but the vegetable plants died out. I should be concerned about",
            options: ["autophagy", "allelophagy", "autopathy", "allelopathy"],
            answer: [3],
          },
          {
            question: "Which of these is a physical factor of habitat?",
            options: ["soil", "moisture", "predators", "temperatures"],
            answer: [2],
          },
          {
            question:
              '"The rate of biological process is limited by that factor in least amount relative to requirement, so there is a single limiting factor". This is the statement for',
            options: [
              "Liebig's law of minimum",
              "Liebig's law of maximum",
              "Shelford's law of tolerance",
              "Shelford's law of intolerance",
            ],
            answer: [0],
          },
          {
            question: "Transplantation experiments are used to find",
            options: [
              "potential range",
              "effective range",
              "actual range",
              "economic range",
            ],
            answer: [0],
          },
          {
            question:
              '"Quick movement over large distances, often across unsuitable terrain" is a definition of',
            options: [
              "diffusion",
              "secular dispersal",
              "jump dispersal",
              "drifting",
            ],
            answer: [2],
          },
          {
            question:
              "The movement of lions across the Gir landscape is an example of",
            options: [
              "diffusion",
              "secular dispersal",
              "jump dispersal",
              "drifting",
            ],
            answer: [0],
          },
          {
            question: "Good climate is a",
            options: [
              "chemical factor",
              "demographic factor",
              "push factor",
              "pull factor",
            ],
            answer: [3],
          },
          {
            question: "Scarcity of food is a",
            options: [
              "chemical factor",
              "demographic factor",
              "push factor",
              "pull factor",
            ],
            answer: [2],
          },
          {
            question:
              '"The geographical distribution of a species will be controlled by that environmental factor for which the organism has the narrowest range of tolerance". This is the statement for',
            options: [
              "Liebig's law of minimum",
              "Liebig's law of maximum",
              "Shelford's law of tolerance",
              "Shelford's law of intolerance",
            ],
            answer: [2],
          },
          {
            question:
              "The movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called",
            options: ["translocation", "migration", "dispersal", "drifting"],
            answer: [2],
          },
        ],
      },
      {
        module: 8,
        questions: [
          {
            question:
              "According to Leopold, which of these is not a tool of habitat management?",
            options: ["fire", "gun", "cattle", "sickle"],
            answer: [3],
          },
          {
            question:
              "Which of these correctly represents the process of habitat fragmentation and loss?",
            options: [
              "original forest --> dissection --> perforation --> fragmentation --> attrition",
              "original forest --> dissection --> attrition --> fragmentation --> perforation",
              "original forest --> dissection --> perforation --> attrition --> fragmentation",
              "original forest --> dissection --> fragmentation --> perforation --> attrition",
            ],
            answer: [0],
          },
          {
            question:
              "We prefer those areas for the creation of conservation reserve where the level of threat is",
            options: ["very high", "medium", "very low", "non-existent"],
            answer: [1],
          },
          {
            question:
              '"The subset of physical and biotic environmental factors that permit an animal (or plant) to survive and reproduce" is the definition of',
            options: ["habitat", "ecosystem", "biome", "biosphere"],
            answer: [0],
          },
          {
            question: "Captive breeding is an example of",
            options: [
              "in-situ conservation",
              "ex-situ conservation",
              "in-situ preservation",
              "ex-situ preservation",
            ],
            answer: [1],
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
              "environmental fluctuation",
            ],
            answer: [3],
          },
          {
            question: "Zoo is an example of",
            options: [
              "in-situ conservation",
              "ex-situ conservation",
              "in-situ preservation",
              "ex-situ preservation",
            ],
            answer: [1],
          },
          {
            question: "The acronym HIPPO does not include",
            options: [
              "habitat loss",
              "habitat enhancement",
              "invasive species",
              "human over-population",
            ],
            answer: [1],
          },
          {
            question: "The acronym HIPPO does not include",
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
        module: 9,
        questions: [
          {
            question:
              "Which of these is a positive check according to Malthus?",
            options: ["late marriage", "war", "celibacy", "moral restraint"],
            answer: [1],
          },
          {
            question: "The demographic transition sees a society move from",
            options: [
              "high birth rate, low death rate to low birth rate, low death rate",
              "low birth rate, high death rate to low birth rate, low death rate",
              "high birth rate, high death rate to low birth rate, low death rate",
              "high birth rate, high death rate to low birth rate, high death rate",
            ],
            answer: [2],
          },
          {
            question: "According to the Malthusian model",
            options: [
              "population grows in geometric progression, food supply increases in arithmetic progression",
              "population grows in geometric progression, food supply increases in geometric progression",
              "population grows in arithmetic progression, food supply increases in arithmetic progression",
              "population grows in arithmetic progression, food supply increases in geometric progression",
            ],
            answer: [0],
          },
          {
            question:
              'The book "An Essay on the Principle of Population" was written by',
            options: ["Darwin", "Malthus", "Spencer", "Owens"],
            answer: [1],
          },
          {
            question:
              "_______ is used to identify which potential impacts are relevant to assess.",
            options: ["screening", "scoping", "reporting", "review"],
            answer: [1],
          },
          {
            question:
              "Which of these is a preventive check according to Malthus?",
            options: ["foresight", "vice", "misery", "flood"],
            answer: [0],
          },
          {
            question:
              "______ determines which projects or developments require a full or partial impact assessment study.",
            options: ["screening", "scoping", "reporting", "review"],
            answer: [0],
          },
          {
            question: "Which of these is a pillar of sustainability?",
            options: [
              "social sustainability",
              "industrial sustainability",
              "agricultural sustainability",
              "trans-boundary sustainability",
            ],
            answer: [0],
          },
          {
            question: "Which of these is not a pillar of sustainability?",
            options: [
              "environmental sustainability",
              "economic sustainability",
              "trans-boundary sustainability",
              "agricultural sustainability",
            ],
            answer: [2],
          },
          {
            question: "The quantum of human impacts is given by",
            options: [
              "I = P X A X T",
              "I = P + A + T",
              "I = P + A - T",
              "I = P - (A+T)",
            ],
            answer: [0],
          },
        ],
      },
      {
        module: 10,
        questions: [
          {
            question: "Which of these is not a climatic forcing for Earth?",
            options: [
              "changes in plate tectonics",
              "changes in Earth's orbit",
              "changes in Sun's orbit",
              "changes in Sun's strength",
            ],
            answer: [2],
          },
          {
            question:
              "Mesodebris in the context of plastic debris has a fragment size of",
            options: [">20mm", "5-20 mm", "<5mm", "<1mm"],
            answer: [1],
          },
          {
            question:
              "Macrodebris in the context of plastic debris has a fragment size of",
            options: [">20mm", "5-20mm", "<5mm", "<1mm"],
            answer: [0],
          },
          {
            question:
              '"Any changes in natural or human systems that inadvertently increase vulnerability to climatic stimuli; an adaptation that does not succeed in reducing vulnerability but increases it instead" is a definition of',
            options: [
              "adaptation",
              "mitigation",
              "maladaptation",
              "malmitigation",
            ],
            answer: [2],
          },
          {
            question:
              "Which of these is not a principle of ecological restoration?",
            options: [
              "ecological integrity",
              "long-term sustainability",
              "benefits and engages scientists",
              "informed by past and future",
            ],
            answer: [2],
          },
          {
            question:
              "The government came up with a regulation that incandescent bulbs be replaced by LED bulbs, so that electricity consumption and release of carbon dioxide from power plants are reduced. In the context of climate change, such an action would be called",
            options: [
              "adaptation",
              "mitigation",
              "deceleration",
              "maladaptation",
            ],
            answer: [1],
          },
          {
            question:
              "Which of these is not a principle of ecological restoration?",
            options: [
              "ecological integrity",
              "short-term sustainability",
              "benefits and engages society",
              "informed by past and future",
            ],
            answer: [1],
          },
          {
            question:
              '"The ability of a system to adjust to climate change (including climate variability and extremes) to moderate potential damages, to take advantage of opportunities, or to cope with the consequences" is a definition of',
            options: [
              "adaptive response",
              "adaptive capacity",
              "mitigative response",
              "mitigative capacity",
            ],
            answer: [1],
          },
          {
            question: "Which of these is not a climatic forcing for Earth?",
            options: [
              "changes in plate tectonics",
              "changes in Earth's orbit",
              "changes in Moon's orbit",
              "changes in Sun's strength",
            ],
            answer: [2],
          },
          {
            question:
              "Because of climate change, Mudumalai tiger reserve is suffering from frequent droughts. The management has built several artificial water holes for animals and fills them up regularly with tankers. In the context of climate change, such an action would be called",
            options: [
              "adaptation",
              "mitigation",
              "deceleration",
              "maladaptation",
            ],
            answer: [0],
          },
        ],
      },
      {
        module: 11,
        questions: [
          {
            question: "Which of these is correct?",
            options: [
              "R + G = M + F",
              "R + M = G + F",
              "R + F = M + G",
              "R + G + M + F = 0",
            ],
            answer: [0],
          },
          {
            question: "Which of these is not an impact of toxic chemicals?",
            options: [
              "lethal effects",
              "sub-lethal effects",
              "reduction of existing stressors",
              "reduced fecundity",
            ],
            answer: [2],
          },
          {
            question: "A pest population is called controlled when",
            options: [
              "it is not increasing",
              "it is decreasing",
              "it is not causing any economic damage",
              "it is not causing excessive economic damage",
            ],
            answer: [3],
          },
          {
            question:
              "A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled up with soil and species of deciduous forest planted again. This is an example of",
            options: ["recovery", "restoration", "enhancement", "replacement"],
            answer: [1],
          },
          {
            question: "The root zone treatment plant is an example of",
            options: [
              "phytoremediation",
              "biological control",
              "biomagnification",
              "bioaccumulation",
            ],
            answer: [0],
          },
          {
            question: "A pest population is called uncontrolled when",
            options: [
              "it is increasing",
              "it is not decreasing",
              "it is causing some economic damage",
              "it is causing excessive economic damage",
            ],
            answer: [3],
          },
          {
            question:
              "The impact of El Nino on fishery in Peru is explained by",
            options: [
              "match hypothesis",
              "mismatch hypothesis",
              "match-mismatch hypothesis",
              "none of these",
            ],
            answer: [2],
          },
          {
            question: "Which of these is correct?",
            options: [
              "the maximum sustainable yield is near the beginning of the sigmoidal curve",
              "the maximum sustainable yield is near the mid-point of the sigmoidal curve",
              "the maximum sustainable yield is near the end of the sigmoidal curve",
              "none of these",
            ],
            answer: [1],
          },
          {
            question: "Ludwig's ratchet predicts",
            options: [
              "decreasing harvesting rate",
              "constant harvesting rate",
              "increasing harvesting rate",
              "fluctuating harvesting rate",
            ],
            answer: [2],
          },
          {
            question:
              "A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled up with water and a lake was created. It is now visited by several migratory birds. This is an example of",
            options: ["recovery", "restoration", "enhancement", "replacement"],
            answer: [3],
          },
        ],
      },
      {
        module: 12,
        questions: [
          {
            question: "Enquiry into plants is a book written by",
            options: ["Theophrastus", "Linnaeus", "Malthus", "Humboldt"],
            answer: [0],
          },
          {
            question: "The mitochondrion is a/an",
            options: ["sub-cellular organelle", "cell", "tissue", "organ"],
            answer: [0],
          },
          {
            question: "Which of these is not a pillar of sustainability?",
            options: [
              "environmental sustainability",
              "economic sustainability",
              "trans-boundary sustainability",
              "social sustainability",
            ],
            answer: [2],
          },
          {
            question: "Good climate is a",
            options: [
              "chemical factor",
              "demographic factor",
              "push factor",
              "pull factor",
            ],
            answer: [3],
          },
          {
            question: "Importance value varies from",
            options: ["0 to 10", "0 to 50", "0 to 100", "0 to 300"],
            answer: [3],
          },
          {
            question:
              "Consider the food chain: grass --> grasshopper --> frog --> snake --> hawk. In this food chain",
            options: [
              "frog is producer",
              "frog is consumer and carnivore",
              "frog is consumer and herbivore",
              "frog is decomposer",
            ],
            answer: [1],
          },
          {
            question:
              "The juvenile mortality rate is the annual number of deaths of juvenile per",
            options: [
              "100 births",
              "1000 births",
              "100 live births",
              "1000 live births",
            ],
            answer: [3],
          },
          {
            question:
              "Because of climate change, Mudumalai Tiger Reserve is suffering from frequent droughts. The management has built several artificial water holes for animals, and fills them up regularly with tankers. In the context of climate change, such an action would be called",
            options: [
              "adaptation",
              "mitigation",
              "deceleration",
              "maladaptation",
            ],
            answer: [0],
          },
          {
            question: "The scientific study of animal behaviour is called",
            options: [
              "behaviourism",
              "ecology",
              "ethology",
              "prey-predator dynamics",
            ],
            answer: [2],
          },
          {
            question: "Zoo is an example of",
            options: [
              "in-situ conservation",
              "ex-situ conservation",
              "in-situ preservation",
              "ex-situ preservation",
            ],
            answer: [1],
          },
        ],
      },
    ],
  },
  {
    courseId: 4,
    course_name: "Training and Development",
    data: [
      {
        module: 1,
        questions: [
          {
            question:
              "What is the primary purpose of a needs assessment in the training system?",
            options: [
              "To evaluate the training program",
              "To identify training needs",
              "To implement training objectives",
              "To assess employee satisfaction",
            ],
            answer: [1],
          },
          {
            question:
              "What is the main difference between training and development?",
            options: [
              "Training is future-oriented, while development is present-oriented",
              "Training focuses on personal growth, while development focuses on specific job skills",
              "Training is for immediate job performance, while development prepares for future roles",
              "Training is theoretical, while development is practical",
            ],
            answer: [2],
          },
          {
            question:
              "Which strategy is NOT a part of Training & Development Strategies?",
            options: ["Cognitive", "Behavioral", "Emotional", "Financial"],
            answer: [3],
          },
          {
            question:
              "What does the 'gap' between present competency and required competency indicate?",
            options: [
              "The success of the training program",
              "The individual training needs",
              "The performance review process",
              "The financial cost of training",
            ],
            answer: [1],
          },
          {
            question:
              "Which of the following is a method for determining training needs?",
            options: [
              "Job analysis",
              "Market analysis",
              "Financial analysis",
              "Competitive analysis",
            ],
            answer: [0],
          },
          {
            question:
              "In the training system, what follows after setting training objectives?",
            options: [
              "Need assessment",
              "Implementation",
              "Evaluation",
              "Feedback",
            ],
            answer: [1],
          },
          {
            question:
              "Which type of training is focused on preparing employees for future job roles?",
            options: [
              "On-the-job training",
              "Internal training",
              "External training",
              "Organization development",
            ],
            answer: [3],
          },
          {
            question:
              "Which is NOT a phase in the systematic approach to training?",
            options: [
              "Assessment",
              "Development",
              "Implementation",
              "Evaluation",
            ],
            answer: [1],
          },
          {
            question:
              "What is the focus of emotional strategies in training and development?",
            options: [
              "Enhancing technical skills",
              "Improving cognitive abilities",
              "Developing emotional intelligence",
              "Increasing financial knowledge",
            ],
            answer: [2],
          },
          {
            question: "What is the final phase in the training system?",
            options: [
              "Needs assessment",
              "Training objectives",
              "Implementation",
              "Evaluation",
            ],
            answer: [3],
          },
        ],
      },
      {
        // Assuming this is the same course ID
        module: 2,
        questions: [
          {
            question:
              "What is the first step in the instructional design process?",
            options: [
              "Implementation",
              "Evaluation",
              "Needs assessment",
              "Training objectives",
            ],
            answer: [2], // Correct answer is "Needs assessment"
          },
          {
            question:
              "Which of the following is NOT a cause for training needs assessment?",
            options: [
              "New technology",
              "Legislation",
              "Customer requests",
              "Increased profits",
            ],
            answer: [3], // Correct answer is "Increased profits"
          },
          {
            question:
              "What involves identifying whether training supports the company’s strategic direction?",
            options: [
              "Task analysis",
              "Organizational analysis",
              "Person analysis",
              "Performance appraisal",
            ],
            answer: [1], // Correct answer is "Organizational analysis"
          },
          {
            question: "What is the primary goal of performance appraisal?",
            options: [
              "To improve employee satisfaction",
              "To evaluate work-related behaviour and potential",
              "To increase company profits",
              "To assess market trends",
            ],
            answer: [1], // Correct answer is "To evaluate work-related behaviour and potential"
          },
          {
            question:
              "Which of the following is NOT an objective of performance appraisal?",
            options: [
              "Compensation decisions",
              "Training and development programs",
              "Personal growth and development",
              "Market expansion",
            ],
            answer: [3], // Correct answer is "Market expansion"
          },
          {
            question:
              "Which is NOT a part of the causes and outcomes of needs assessment?",
            options: [
              "Legislation",
              "Customer requests",
              "New jobs",
              "Personal interests",
            ],
            answer: [3], // Correct answer is "Personal interests"
          },
          {
            question:
              "Which analysis helps to identify employees who need training and their readiness for training?",
            options: [
              "Organizational analysis",
              "Task analysis",
              "Person analysis",
              "Job evaluation",
            ],
            answer: [2], // Correct answer is "Person analysis"
          },
          {
            question:
              "What is the final step in the performance appraisal process?",
            options: [
              "Communicating the standards",
              "Measuring actual performance",
              "Taking corrective actions",
              "Comparing actual performance with standards",
            ],
            answer: [2], // Correct answer is "Taking corrective actions"
          },
          {
            question:
              "Which of the following is a primary reason for conducting a needs assessment?",
            options: [
              "To reduce training cost",
              "To ensure alignment with business strategy",
              "To improve employee satisfaction",
              "To increase production",
            ],
            answer: [1], // Correct answer is "To ensure alignment with business strategy"
          },
          {
            question:
              "What refers to the process used to determine whether training is necessary?",
            options: [
              "Job evaluation",
              "Performance appraisal",
              "Needs assessment",
              "Organizational analysis",
            ],
            answer: [2], // Correct answer is "Needs assessment"
          },
        ],
      },
      {
        module: 3,
        questions: [
          {
            question:
              "What refers to the characteristics of the learning environment in training design?",
            options: [
              "Training method",
              "Training design",
              "Training site",
              "Training evaluation",
            ],
            answer: [1],
          },
          {
            question:
              "Which learner characteristic refers to people's belief that they can successfully learn the training program content?",
            options: [
              "Motivation",
              "Self-efficacy",
              "Learning style",
              "Perceived utility",
            ],
            answer: [1],
          },
          {
            question:
              "According to adult learning principles, adults are motivated by which types of factors?",
            options: [
              "Only intrinsic factors",
              "Only extrinsic factors",
              "Both intrinsic and extrinsic factors",
              "Neither intrinsic nor extrinsic factors",
            ],
            answer: [2],
          },
          {
            question:
              "What instructional strategy involves repeated practice even after a learner has mastered the performance?",
            options: [
              "Behavioral modeling",
              "Overlearning",
              "Massed practice",
              "Error-based examples",
            ],
            answer: [1],
          },
          {
            question:
              "Which theory of training transfer occurs when the training session content is identical to the job tasks?",
            options: [
              "Stimulus generalization approach",
              "Identical elements theory",
              "Cognitive theory of transfer",
              "Social learning theory",
            ],
            answer: [1],
          },
          {
            question:
              "Which approach to training transfer emphasizes far transfer?",
            options: [
              "Cognitive theory of transfer",
              "Identical elements theory",
              "Stimulus generalization approach",
              "Social learning theory",
            ],
            answer: [2],
          },
          {
            question:
              "What is the first factor in the model of the transfer process?",
            options: [
              "Trainee characteristics",
              "Work environment",
              "Training design",
              "Learning retention",
            ],
            answer: [0],
          },
          {
            question:
              "Which instructional strategy involves sharing what can go wrong when training is not used properly?",
            options: [
              "Overlearning",
              "Error-based examples",
              "Behavioral modeling",
              "Immediate confirmation",
            ],
            answer: [1],
          },
          {
            question:
              "Which learner characteristic is defined as a person's desire to learn training content?",
            options: [
              "Ability to learn",
              "Self-efficacy",
              "Motivation",
              "Perceived utility",
            ],
            answer: [2],
          },
          {
            question:
              "Which principle of adult learning suggests that adults need to know why they are learning something?",
            options: [
              "Self-directed learning",
              "Need for relevance",
              "Problem-solving approach",
              "Need to know",
            ],
            answer: [3],
          },
          {
            question:
              "Which of the following refers to factors built into the training program to increase the chances that transfer of training will occur?",
            options: [
              "Training evaluation",
              "Training design",
              "Training need",
              "Training organization",
            ],
            answer: [1],
          },
          {
            question:
              "Which one of the following is one of the elements of instructional strategies in designing a training program?",
            options: [
              "Practice/feedback",
              "Opportunity",
              "Learning styles",
              "Self-efficacy",
            ],
            answer: [0],
          },
          {
            question: "A room where training will be conducted is called as ……",
            options: [
              "Trainer's accommodation",
              "Trainees' accommodation",
              "Training site",
              "Training structure",
            ],
            answer: [2],
          },
          {
            question:
              "Which of the following is one of the principles of adult learning?",
            options: [
              "No motivation by extrinsic and intrinsic factors",
              "Have need to be self-directed",
              "No problem-solving approach to learning",
              "No use of work-related experience into work process",
            ],
            answer: [1],
          },
          {
            question:
              "People learn best if _____ and ______ are given as soon as possible after training.",
            options: [
              "Action, Reinforcement",
              "Punishment, feedback",
              "Feedback, Responses",
              "Reinforcement, Feedback",
            ],
            answer: [3],
          },
          {
            question:
              "Checking of the bounce or absorption of sound from the walls, ceiling, floor and furniture is called as …….",
            options: ["Glare", "Acoustics", "Sitting arrangements", "Lighting"],
            answer: [1],
          },
          {
            question: "How many strategies are there in conflict management?",
            options: ["Six", "Four", "Eight", "Five"],
            answer: [3],
          },
          {
            question:
              "Which of the following is not one of the purposes of training and development?",
            options: [
              "Performance improvement",
              "Disobeying company rules and policies",
              "Upgrading skills",
              "Solving problems",
            ],
            answer: [1],
          },
          {
            question:
              "Which training program focuses on short-term courses that would help employees learn about the latest developments in their respective fields?",
            options: [
              "Skills training",
              "Team training",
              "Refreshers training",
              "Cross-functional training",
            ],
            answer: [2],
          },
          {
            question:
              "What does strategic framework approach imply in the Human Resource Management approaches for training and development?",
            options: [
              "Development of those skills and competencies in employees, that are unique and superior to competitors, leading to competitive advantage",
              "Dependency relationship between training and business strategy of the firm",
              "Training is an investment in HR that gives returns in the form of increased productivity",
              "To improve the socialization of employees in the organization",
            ],
            answer: [0],
          },
        ],
      },
      {
        module: 4,
        questions: [
          {
            question: "What is design thinking generally defined as?",
            options: [
              "A theoretical process",
              "An analytic and creative process",
              "A practical-only process",
              "A memorization technique",
            ],
            answer: [1],
          },
          {
            question: "Why is design important in the digital age?",
            options: [
              "It is a highly valued activity",
              "It is outdated",
              "It is only useful for art",
              "It has no relevance",
            ],
            answer: [0],
          },
          {
            question:
              "Which step of the design process involves understanding the users' needs?",
            options: [
              "Application",
              "Iteration",
              "Representation",
              "Investigation",
            ],
            answer: [3],
          },
          {
            question:
              "What does the 'Define' step in the design thinking process entail?",
            options: [
              "Building representation of ideas",
              "Constructing a point of view based on user needs",
              "Brainstorming solutions",
              "Testing ideas",
            ],
            answer: [1],
          },
          {
            question:
              "Which step of the design process involves creating and testing prototypes to stand up to the demands of development?",
            options: [
              "Investigation",
              "Application",
              "Representation",
              "Iteration",
            ],
            answer: [3],
          },
          {
            question:
              "In the design thinking process, what does 'Prototype' mean?",
            options: [
              "Learning about your audience",
              "Brainstorming solutions",
              "Building a representation of your ideas",
              "Testing your ideas",
            ],
            answer: [2],
          },
          {
            question:
              "Which process involves modeling a solution to meet users' needs?",
            options: [
              "Iteration",
              "Application",
              "Representation",
              "Investigation",
            ],
            answer: [2],
          },
          {
            question:
              "'Design for learning' aimed at eliminating lesson plans.",
            options: ["True", "False"],
            answer: [1],
          },
          {
            question:
              "What is a key characteristic of digital native learners?",
            options: [
              "Preference for traditional textbooks",
              "Preference for receiving information from multiple multimedia sources",
              "Preference for single-tasking",
              "Preference for delayed rewards",
            ],
            answer: [1],
          },
          {
            question:
              "What is an example of digital collaboration in education?",
            options: [
              "Individual study",
              "Printed materials",
              "Online communities and interactive discussion areas",
              "Written exams",
            ],
            answer: [2],
          },
        ],
      },
      {
        module: 5,
        questions: [
          {
            question:
              "Which method is used for developing decision-making skills in executive development?",
            options: [
              "Job rotation",
              "Coaching",
              "Business game",
              "Sensitivity training",
            ],
            answer: [2],
          },
          {
            question: "What are hands-on methods ideal for?",
            options: [
              "Presenting large amounts of information",
              "Developing specific skills",
              "Reducing training costs",
              "Conducting lectures",
            ],
            answer: [1],
          },
          {
            question: "What is On-the-Job Training (OJT)?",
            options: [
              "Learning outside the work setting",
              "Learning through lectures",
              "Learning during work by observing peers or managers",
              "Learning through online courses",
            ],
            answer: [2],
          },
          {
            question: "What does self-directed learning involve?",
            options: [
              "Employer-driven training",
              "Employees taking responsibility for all aspects of their learning",
              "Formal classroom training",
              "Group learning",
            ],
            answer: [1],
          },
          {
            question: "What is a simulation in training methods?",
            options: [
              "A method that represents a real-life situation",
              "A lecture-based training method",
              "A passive training method",
              "A traditional classroom method",
            ],
            answer: [0],
          },
          {
            question:
              "Which training method involves acting out characters assigned to trainees?",
            options: [
              "Case study",
              "Role play",
              "Business game",
              "Behavior modelling",
            ],
            answer: [1],
          },
          {
            question: "What is the focus of group building methods?",
            options: [
              "Individual skill development",
              "Improving team effectiveness",
              "Reducing training costs",
              "Increasing lecture hours",
            ],
            answer: [1],
          },
          {
            question:
              "What are the three broad categories of traditional training methods?",
            options: [
              "Online methods, Offline methods, Hybrid methods",
              "Formal methods, Informal methods, Experiential methods",
              "Lecture methods, Discussion methods, Case study methods",
              "Presentation methods, Hands-on methods, Group building methods",
            ],
            answer: [3],
          },
          {
            question:
              "Which training method involves trainees being passive recipients of information?",
            options: [
              "Hands-on methods",
              "Group building methods",
              "Presentation methods",
              "Interactive methods",
            ],
            answer: [2],
          },
          {
            question:
              "What is a key disadvantage of lecture-based presentation methods?",
            options: [
              "They are interactive",
              "They lack participant involvement",
              "They are cost-effective",
              "They use multimedia",
            ],
            answer: [1],
          },
        ],
      },
      {
        module: 6,
        questions: [
          {
            question:
              "Which of the following is an element of the group environment in training?",
            options: [
              "Relationship among participants",
              "Training methodology",
              "Course content",
              "Duration of the training",
            ],
            answer: [0],
          },
          {
            question:
              "What does functional behavior in a training group refer to?",
            options: [
              "Actions that disrupt the training process",
              "Actions that assist in the task of trainers",
              "Actions that are unrelated to the training",
              "Actions that are performed outside the training session",
            ],
            answer: [1],
          },
          {
            question:
              "Which of the following is an example of dysfunctional behavior in a training group?",
            options: [
              "Providing feedback",
              "Non-participation in training activities",
              "Assisting trainers",
              "Giving support to participants",
            ],
            answer: [1],
          },
          {
            question:
              "What is the role of a trainer when dealing with a self-seeker participant?",
            options: [
              "Ignoring them",
              "Handling them subtly and discreetly",
              "Giving them special attention",
              "Allowing them to lead the group",
            ],
            answer: [1],
          },
          {
            question:
              "What should a trainer do to engage a detached or disinterested participant?",
            options: [
              "Ignoring them",
              "Establish communication and show empathy",
              "Assign them more task",
              "Criticize them publicly",
            ],
            answer: [1],
          },
          {
            question:
              "Which type of participant in a training group has a strong urge to dominate or monopolize the time?",
            options: [
              "Self-seeker",
              "Hesitant or shy",
              "Monopolist or dominator",
              "Socialiser",
            ],
            answer: [2],
          },
          {
            question: "What is a case study used for in training?",
            options: [
              "To describe theoretical concepts",
              "To analyze and critique actions taken in difficult situations",
              "To evaluate trainee performance",
              "To outline company policies",
            ],
            answer: [1],
          },
          {
            question:
              "Higher-order intellectual skills such as analysis and evaluation is especially developed through case studies.",
            options: ["True", "False"],
            answer: [0],
          },
          {
            question:
              "What is an important factor to consider when reviewing pre-existing cases?",
            options: [
              "Length of the case",
              "Relevance to the trainee's work situation",
              "Popularity of the case",
              "Author of the case",
            ],
            answer: [1],
          },
          {
            question:
              "Which institution is known for providing a wide variety of business management case studies?",
            options: [
              "Harvard Business School",
              "MIT",
              "Stanford University",
              "Yale University",
            ],
            answer: [0],
          },
        ],
      },
      {
        module: 7,
        questions: [
          {
            question:
              "Which of the following is a characteristic of business games?",
            options: [
              "There are no rules limiting participant behavior.",
              "The game involves a contest among trainees or teams.",
              "There are no alternative courses of action available to trainees",
              "The game is designed to confuse participants.",
            ],
            answer: [1],
          },
          {
            question:
              "During debriefing, which of the following questions might a trainer ask?",
            options: [
              "How did the score of the game affect your behaviour and the behaviour of the team?",
              "Did you enjoy the game?",
              "What was your favourite part of the game?",
              "How would you rate the game on a scale of 1 to 10?",
            ],
            answer: [0],
          },
          {
            question: "What is a potential disadvantage of business games?",
            options: [
              "They are always too easy for participants.",
              "Some people reject them as childish and do not participate fully.",
              "They always lead to team conflict.",
              "They are not engaging enough.",
            ],
            answer: [1],
          },
          {
            question:
              "What is one of the key concepts reinforced during the Harley-Davidson game?",
            options: [
              "The importance of individual performance",
              "How to build a motorcycle",
              "The need for strategic thinking",
              "The basics of customer service",
            ],
            answer: [2],
          },
          {
            question:
              "What is the primary objective of using business games in management training?",
            options: [
              "To replace traditional lectures",
              "To provide hands-on experience",
              "To assess theoretical knowledge",
              "To reduce training costs",
            ],
            answer: [1],
          },
          {
            question:
              "What is one of the elements that facilitators can change between rounds in the Harley-Davidson game?",
            options: [
              "The location of the dealership",
              "The business hours",
              "Interest rates",
              "The type of motorcycles sold",
            ],
            answer: [2],
          },
          {
            question:
              "Which aspect is crucial for trainers when conducting the business game?",
            options: [
              "Ensuring the game has multiple levels",
              "Providing a detailed introduction and briefing",
              "Limiting participant interactions",
              "Maintaining a strict time limit",
            ],
            answer: [1],
          },
          {
            question:
              "What is one of the problems that might be discussed during the evaluation session of a business game?",
            options: [
              "Technical glitches in the game",
              "Patterns of behavior within teams",
              "Personal conflicts outside the game",
              "The graphical quality of the game",
            ],
            answer: [1],
          },
          {
            question:
              "Why is it important for a trainer to be fully familiar with the various aspects of the game?",
            options: [
              "To create new rules on the fly",
              "To deal immediately with any situation that arises",
              "To ensure the game runs longer than planned",
              "To replace the game if needed",
            ],
            answer: [1],
          },
          {
            question:
              "The effectiveness of a business game can be maximized by relating it to real-life situations.",
            options: ["True", "False"],
            answer: [0],
          },
        ],
      },
      {
        module: 8,
        questions: [
          {
            question: "What distinguishes role plays from simulations?",
            options: [
              "Role plays provide detailed information about the situation.",
              "Role plays focus on interpersonal responses.",
              "Role plays require physical responses.",
              "Role plays have well-defined models of reality.",
            ],
            answer: [1],
          },
          {
            question: "Which of the following is NOT a use of role play?",
            options: [
              "Demonstrating specific behaviors",
              "Increasing involvement of the group",
              "Memorizing theoretical concepts",
              "Experimenting in a no-risk setting",
            ],
            answer: [2],
          },
          {
            question: "What is the purpose of reverse role-play?",
            options: [
              "To simplify the role-playing process",
              "To help participants understand and respect each other's viewpoints",
              "To eliminate the need for debriefing",
              "To allow participants to create their own scripts",
            ],
            answer: [1],
          },
          {
            question:
              "How is spontaneous role-play different from other types?",
            options: [
              "It requires extensive preparation and scripting.",
              "It limits the number of participants to two.",
              "It has participants act without any prior preparation or scripts.",
              "It focuses solely on physical responses.",
            ],
            answer: [2],
          },
          {
            question:
              "A common tool used in technology-based training is __________.",
            options: [
              "E-learning platforms",
              "Printed manuals",
              "Face-to-face workshops",
              "Telephone calls.",
            ],
            answer: [0],
          },
          {
            question:
              "Which of the following is a benefit of using technology in training?",
            options: [
              "It requires less initial investment",
              "It provides a standardized training experience",
              "It reduces the need for participant interaction",
              "It eliminates the need for assessments",
            ],
            answer: [1],
          },
          {
            question:
              "A potential challenge mentioned in the document regarding the use of technology in training is technical issues and accessibility.",
            options: ["True", "False"],
            answer: [0],
          },
          {
            question:
              "What is one way that technology supports continuous learning in organizations?",
            options: [
              "By offering one-time training sessions",
              "By limiting access to external training content.",
              "By focusing only on mandatory training requirements",
              "By providing access to a wide range of online resources and courses",
            ],
            answer: [3],
          },
          {
            question:
              "What does a high score on the Least Preferred Co-Worker (LPC) Questionnaire indicate?",
            options: [
              "Task-oriented leadership style",
              "Relationship-oriented leadership style",
              "Production-oriented leadership style",
              "Employee-oriented leadership style",
            ],
            answer: [1],
          },
          {
            question:
              "In Fiedler's Contingency Model, what does 'position power' refer to?",
            options: [
              "The leader's ability to inspire employees",
              "Influence derived from one's formal structural position in the organization",
              "The level of trust between the leader and subordinates",
              "The complexity of job assignments",
            ],
            answer: [1],
          },
        ],
      },
      {
        module: 9,
        questions: [
          {
            question:
              "What is the primary purpose of behavior modeling in training?",
            options: [
              "To provide theoretical knowledge",
              "To develop organizational policies",
              "To assess trainee performance",
              "To demonstrate key behaviors for trainees to replicate",
            ],
            answer: [3],
          },
          {
            question: "What is vicarious reinforcement?",
            options: [
              "When a trainee receives direct feedback",
              "When a trainee sees a model receiving reinforcement for certain behaviors",
              "When a trainer provides additional training materials",
              "When a trainee practices behaviors alone",
            ],
            answer: [1],
          },
          {
            question: "Behavior modeling is based on Social Learning Theory.",
            options: ["True", "False"],
            answer: [0],
          },
          {
            question:
              "What is the first step in developing a behavior modeling training program?",
            options: [
              "Creating the modeling display",
              "Providing opportunities for practice",
              "Determining tasks that are not adequately performed due to lack of skill",
              "Evaluating the effectiveness of the program",
            ],
            answer: [2],
          },
          {
            question:
              "What does application planning in behavior modeling aim to do?",
            options: [
              "Increase theoretical knowledge",
              "Enhance transfer of training to the job",
              "Provide entertainment",
              "Test trainees’ memory",
            ],
            answer: [1],
          },
          {
            question:
              "Which activity is NOT part of a behavior modeling training program?",
            options: [
              "Watching a video that presents key behaviors",
              "Participating in role plays and practice",
              "Developing organizational policies",
              "Receiving feedback on performance of key behaviors",
            ],
            answer: [2],
          },
          {
            question:
              "Which of the following is a key behavior displayed in role play according to the lecture?",
            options: [
              "Technical skills",
              "Creativity",
              "Physical strength",
              "Analytical reasoning",
            ],
            answer: [1],
          },
          {
            question:
              "________ is essential for effective problem-solving and decision-making.",
            options: [
              "Collaboration",
              "Physical agility",
              "Technical skills",
              "Financial acumen",
            ],
            answer: [0],
          },
          {
            question:
              "What is the primary purpose of a cost-benefit analysis in training programs?",
            options: [
              "To determine the best training methods",
              "To evaluate the economic benefits of a training program",
              "To assess trainer performance",
              "To measure trainee satisfaction",
            ],
            answer: [1],
          },
          {
            question:
              "How can a company identify benefits of a training program?",
            options: [
              "Through anecdotal evidence from employees",
              "By observing successful job performers",
              "By reducing the number of training sessions",
              "By eliminating follow-up evaluations",
            ],
            answer: [1],
          },
        ],
      },
      {
        module: 10,
        questions: [
          {
            question: "What is the primary definition of decision-making?",
            options: [
              "The selection of a course of action from among alternatives",
              "Identifying problems within an organization.",
              "Analyzing the outcomes of past decisions",
              "Communicating decisions to employees",
            ],
            answer: [0],
          },
          {
            question:
              "What does 'bounded rationality' refer to in decision-making?",
            options: [
              "Making decisions without any limitations",
              "Limitations of information, time, and certainty that restrict rationality",
              "Making decisions based on complete information",
              "The process of choosing the optimal alternative",
            ],
            answer: [1],
          },
          {
            question:
              "What is the principle of the limiting factor in decision-making?",
            options: [
              "Selecting the easiest course of action",
              "Avoiding difficult decisions.",
              "Recognizing and overcoming factors that stand critically in the way of a goal",
              "Always choosing the least expensive option",
            ],
            answer: [2],
          },
          {
            question:
              "What is the goal of marginal analysis in decision-making?",
            options: [
              "To compare the total costs and total benefits",
              "To focus on qualitative factors only.",
              "To eliminate unnecessary alternatives",
              "To compare additional revenues and additional costs arising from increasing output",
            ],
            answer: [3],
          },
          {
            question:
              "What does 'satisficing' mean in the context of decision-making?",
            options: [
              "Choosing the optimal alternative regardless of circumstances",
              "Selecting a course of action that is satisfactory or good enough under the circumstances",
              "Making decisions based on complete and perfect information",
              "Delaying decisions until more information is available",
            ],
            answer: [1],
          },
          {
            question:
              "In decision-making, what role do qualitative factors play?",
            options: [
              "They are intangible factors that are difficult to measure numerically.",
              "They are the only factors considered in rational decision-making.",
              "They have no impact on the decision-making process",
              "They are always less important than quantitative factors",
            ],
            answer: [0],
          },
          {
            question:
              "What are the three approaches managers can use when selecting from among alternatives?",
            options: [
              "Intuition, Experimentation, Analysis",
              "Experimentation, Analysis, Intuition",
              "Intuition, Experience, Analysis",
              "Experience, Experimentation, Research and Analysis",
            ],
            answer: [3],
          },
          {
            question:
              "Which decision-making style involves a leader seeking input from the group but making the final decision themselves?",
            options: [
              "Autocratic style",
              "Participative style",
              "Individual consultative style",
              "Group decision style",
            ],
            answer: [2],
          },
          {
            question:
              "Exercise can help in improving decision-making skills by allowing participants to practice making decisions in a controlled environment.",
            options: ["True", "False"],
            answer: [0],
          },
          {
            question:
              "Why should trainers ensure that exercises are relevant to the participants' job roles?",
            options: [
              "To ensure maximum engagement and applicability of skills learned",
              "To reduce the time required for the training",
              "To make the training more theoretical",
              "To limit the number of participants",
            ],
            answer: [0],
          },
        ],
      },
      {
        module: 11,
        questions: [
          {
            question:
              "What is the primary goal of group-building methods in training?",
            options: [
              "To improve individual skills",
              "To evaluate employee performance.",
              "To improve team or group effectiveness",
              "To reduce training costs",
            ],
            answer: [2],
          },
          {
            question:
              "What is an important guideline for successful experiential training programs?",
            options: [
              "Use only visual learning modes",
              "Keep trainees within their comfort zones",
              "Tie the program to a specific business problem",
              "Avoid asking trainees for input on program goals",
            ],
            answer: [2],
          },
          {
            question:
              "Which group activity involves a structured but informal exchange of knowledge and ideas?",
            options: [
              "Brainstorming",
              "Group discussion",
              "Panel discussion",
              "Role-playing",
            ],
            answer: [1],
          },
          {
            question: "What is the purpose of a panel discussion in training?",
            options: [
              "To provide individual feedback",
              "To present views and opinions on a specific topic through a panel of experts",
              "To facilitate one-on-one mentoring",
              "To conduct practical exercises",
            ],
            answer: [1],
          },
          {
            question:
              "Which step is NOT part of organizing a brainstorming session?",
            options: [
              "Generation of ideas",
              "Posting all ideas on a flip chart",
              "Conducting individual assessments",
              "Consolidation of ideas and action planning",
            ],
            answer: [2],
          },
          {
            question:
              "What role does a facilitator play in a brainstorming session?",
            options: [
              "Dominating the discussion",
              "Encouraging participation and managing the flow of ideas",
              "Limiting the number of ideas generated",
              "Providing all the solutions",
            ],
            answer: [1],
          },
          {
            question:
              "True or False: Domination by a few members is a key feature of an effective group discussion.",
            options: ["True", "False"],
            answer: [1],
          },
          {
            question:
              "What is the primary purpose of a panel discussion as a training method?",
            options: [
              "To provide individual feedback",
              "To present views and opinions on a specific topic through a panel of experts",
              "To facilitate one-on-one mentoring",
              "To conduct practical exercises",
            ],
            answer: [1],
          },
          {
            question: "What is a common problem with panel discussions?",
            options: [
              "They always lead to immediate solutions",
              "They are often too structured, leading to minimal learner participation",
              "They lack any form of structure",
              "They guarantee active participation from all attendees",
            ],
            answer: [1],
          },
          {
            question:
              "What role does the moderator play in a panel discussion?",
            options: [
              "They guide the discussion and manage the flow of the session",
              "They dominate the discussion",
              "They provide all the answers",
              "They participate as a panelist",
            ],
            answer: [0],
          },
        ],
      },
      {
        module: 12,
        questions: [
          {
            question:
              "Which of the following is NOT a dimension of empowering leadership according to Ahearne, Mathieu, and Rapp (2005)?",
            options: [
              "Enhancing the meaningfulness of work",
              "Fostering participation in decision making",
              "Expressing confidence in high performance",
              "Providing financial incentives",
            ],
            answer: [3],
          },
          {
            question:
              "Which behaviour is ______ NOT part of empowering leadership?",
            options: [
              "Delegation",
              "Coordination",
              "Micromanagement",
              "Information Sharing",
            ],
            answer: [2],
          },
          {
            question:
              "Which of the following is a characteristic of a loyal employee?",
            options: [
              "Frequently changing jobs",
              "Promoting the company to customers and community",
              "Disregarding company policies",
              "Avoiding participation in company activities",
            ],
            answer: [1],
          },
          {
            question:
              "Which of the following is a step in organizing the use of standard scales in training?",
            options: [
              "Introducing unrelated topics",
              "Collecting responses on the standard scale",
              "Ignoring participant feedback",
              "Avoiding discussion of scores",
            ],
            answer: [1],
          },
          {
            question:
              "What is a potential problem in generating employee loyalty?",
            options: [
              "Vision for the company is clear but not for the employee",
              "High employee turnover",
              "Lack of job security",
              "Limited career opportunities",
            ],
            answer: [0],
          },
          {
            question:
              "What is the purpose of customizing a standard scale for training?",
            options: [
              "To change the theoretical framework",
              "To match the scale to the industry and nature of the participants",
              "To reduce the length of the scale",
              "To eliminate certain dimensions",
            ],
            answer: [1],
          },
          {
            question: "What is a key behaviour of empowering leaders?",
            options: [
              "Micromanagement",
              "Delegation and coordination",
              "Limiting information sharing",
              "Focusing on personal benefits",
            ],
            answer: [1],
          },
          {
            question:
              "What do the 'service element and location' dimension of employee loyalty refer to?",
            options: [
              "Commitment to customer service and the physical location of the company",
              "Financial incentives provided to employees",
              "Opportunities for remote work",
              "Social activities organized by the company",
            ],
            answer: [0],
          },
          {
            question:
              "What is the final step in using standard scales effectively in training?",
            options: [
              "Conducting follow-up interviews",
              "Sending a detailed report to the organization",
              "Repeating the training session",
              "Ignoring the results of the training",
            ],
            answer: [1],
          },
          {
            question:
              "Conducting training evaluations helps improve overall work quality.",
            options: ["True", "False"],
            answer: [0],
          },
        ],
      },
    ],
  },
];

export default courseQuestions;
