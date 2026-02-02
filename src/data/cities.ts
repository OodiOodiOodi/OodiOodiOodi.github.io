export interface City {
  id: string;
  name: string;
  nameEn: string;
  country: 'china' | 'usa';
  year: number;
  thumbnail: string;
  photoCount: number;
  description?: string;
}

export const cities: City[] = [
  // China
  {
    id: 'xinjiang-yili',
    name: '新疆伊犁',
    nameEn: 'Xinjiang Yili',
    country: 'china',
    year: 2025,
    thumbnail: '/assets/img/Collect/China/新疆伊犁.webp',
    photoCount: 34,
  },
  {
    id: 'daocheng-yading',
    name: '稻城亚丁',
    nameEn: 'Daocheng Yading',
    country: 'china',
    year: 2025,
    thumbnail: '/assets/img/Collect/China/稻城亚丁.webp',
    photoCount: 44,
  },
  {
    id: 'jiuzhaigou',
    name: '九寨沟',
    nameEn: 'Jiuzhaigou',
    country: 'china',
    year: 2025,
    thumbnail: '/assets/img/Collect/China/九寨沟.webp',
    photoCount: 58,
  },
  {
    id: 'tibet',
    name: '西藏',
    nameEn: 'Tibet',
    country: 'china',
    year: 2024,
    thumbnail: '/assets/img/Collect/China/西藏.webp',
    photoCount: 19,
  },
  {
    id: 'datong',
    name: '山西大同',
    nameEn: 'Datong, Shanxi',
    country: 'china',
    year: 2024,
    thumbnail: '/assets/img/Collect/China/山西大同.webp',
    photoCount: 17,
  },
  {
    id: 'xiamen',
    name: '福建厦门',
    nameEn: 'Xiamen, Fujian',
    country: 'china',
    year: 2024,
    thumbnail: '/assets/img/Collect/China/福建厦门.webp',
    photoCount: 17,
  },
  {
    id: 'shanghai',
    name: '上海',
    nameEn: 'Shanghai',
    country: 'china',
    year: 2024,
    thumbnail: '/assets/img/Collect/China/上海.webp',
    photoCount: 29,
    description: 'A collection of 29 beautiful moments captured in Shanghai',
  },
  {
    id: 'guizhou',
    name: '贵州',
    nameEn: 'Guizhou',
    country: 'china',
    year: 2025,
    thumbnail: '/assets/img/Collect/China/贵州.webp',
    photoCount: 22,
  },
  {
    id: 'nanjing',
    name: '江苏南京',
    nameEn: 'Nanjing, Jiangsu',
    country: 'china',
    year: 2024,
    thumbnail: '/assets/img/Collect/China/江苏南京.webp',
    photoCount: 18,
  },
  {
    id: 'nanchang',
    name: '江西南昌',
    nameEn: 'Nanchang, Jiangxi',
    country: 'china',
    year: 2024,
    thumbnail: '/assets/img/Collect/China/江西南昌.webp',
    photoCount: 5,
  },
  {
    id: 'chengdu',
    name: '四川成都',
    nameEn: 'Chengdu, Sichuan',
    country: 'china',
    year: 2024,
    thumbnail: '/assets/img/Collect/China/四川成都.webp',
    photoCount: 9,
  },
  {
    id: 'wusi-street',
    name: '五四大街',
    nameEn: 'Wusi Street',
    country: 'china',
    year: 2025,
    thumbnail: '/assets/img/Collect/China/五四大街.webp',
    photoCount: 9,
  },
  {
    id: 'olympic-forest-park',
    name: '奥林匹克森林公园',
    nameEn: 'Olympic Forest Park',
    country: 'china',
    year: 2025,
    thumbnail: '/assets/img/Collect/China/奥林匹克森林公园.webp',
    photoCount: 2,
  },
  {
    id: 'shenzhen-sunrise',
    name: '深圳深圳湾日出',
    nameEn: 'Shenzhen Bay Sunrise',
    country: 'china',
    year: 2024,
    thumbnail: '/assets/img/Collect/China/深圳深圳湾日出.webp',
    photoCount: 4,
  },
  {
    id: 'shenzhen-hongshuwang',
    name: '深圳宝安红树湾公园',
    nameEn: 'Shenzhen Hongshuwan Park',
    country: 'china',
    year: 2024,
    thumbnail: '/assets/img/Collect/China/深圳宝安红树湾公园.webp',
    photoCount: 4,
  },
  {
    id: 'zhengzhou',
    name: '河南郑州',
    nameEn: 'Zhengzhou, Henan',
    country: 'china',
    year: 2025,
    thumbnail: '/assets/img/Collect/China/河南郑州.webp',
    photoCount: 4,
  },
  {
    id: 'wuhan',
    name: '湖北武汉',
    nameEn: 'Wuhan, Hubei',
    country: 'china',
    year: 2024,
    thumbnail: '/assets/img/Collect/China/湖北武汉.webp',
    photoCount: 2,
  },
  {
    id: 'wuxi',
    name: '江苏无锡',
    nameEn: 'Wuxi, Jiangsu',
    country: 'china',
    year: 2024,
    thumbnail: '/assets/img/Collect/China/江苏无锡.webp',
    photoCount: 8,
  },
  // USA
  {
    id: 'los-angeles',
    name: 'LosAngeles',
    nameEn: 'Los Angeles',
    country: 'usa',
    year: 2024,
    thumbnail: '/assets/img/Collect/UnitedStates/LosAngeles.webp',
    photoCount: 16,
  },
  {
    id: 'manhattan',
    name: 'Manhattan',
    nameEn: 'Manhattan',
    country: 'usa',
    year: 2024,
    thumbnail: '/assets/img/Collect/UnitedStates/Manhattan.webp',
    photoCount: 16,
  },
  {
    id: 'philadelphia',
    name: 'Philadelphia',
    nameEn: 'Philadelphia',
    country: 'usa',
    year: 2024,
    thumbnail: '/assets/img/Collect/UnitedStates/Philadelphia.webp',
    photoCount: 8,
  },
  {
    id: 'san-francisco',
    name: 'San Francisco',
    nameEn: 'San Francisco',
    country: 'usa',
    year: 2024,
    thumbnail: '/assets/img/Collect/UnitedStates/SanFrancisco.webp',
    photoCount: 22,
  },
  {
    id: 'new-york',
    name: 'New York',
    nameEn: 'New York',
    country: 'usa',
    year: 2024,
    thumbnail: '/assets/img/Collect/UnitedStates/NewYork.webp',
    photoCount: 17,
  },
  {
    id: 'chicago',
    name: 'Chicago',
    nameEn: 'Chicago',
    country: 'usa',
    year: 2024,
    thumbnail: '/assets/img/Collect/UnitedStates/Chicago.webp',
    photoCount: 17,
  },
  {
    id: 'coney-island',
    name: 'ConeyIsland',
    nameEn: 'Coney Island',
    country: 'usa',
    year: 2024,
    thumbnail: '/assets/img/Collect/UnitedStates/ConeyIsland.webp',
    photoCount: 21,
  },
  {
    id: 'boston',
    name: 'Boston',
    nameEn: 'Boston',
    country: 'usa',
    year: 2024,
    thumbnail: '/assets/img/Collect/UnitedStates/Boston.webp',
    photoCount: 9,
  },
];

export function getCitiesByCountry(country: 'china' | 'usa'): City[] {
  return cities.filter(city => city.country === country);
}

export function getCityById(id: string): City | undefined {
  return cities.find(city => city.id === id);
}

export function getAdjacentCities(currentId: string, country: 'china' | 'usa', count: number = 4): City[] {
  const countryCities = getCitiesByCountry(country);
  const currentIndex = countryCities.findIndex(c => c.id === currentId);
  if (currentIndex === -1) return [];

  const result: City[] = [];
  const halfCount = Math.floor(count / 2);

  // Add cities before current
  for (let i = Math.max(0, currentIndex - halfCount); i < currentIndex; i++) {
    result.push(countryCities[i]);
  }

  // Add current city
  result.push(countryCities[currentIndex]);

  // Add cities after current
  for (let i = currentIndex + 1; i < Math.min(countryCities.length, currentIndex + count - result.length + 1); i++) {
    result.push(countryCities[i]);
  }

  return result;
}
