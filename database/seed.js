const Adidas = require('./index.js');
const mongoose = require('mongoose');

let data = [
  {
    productID: 1,
    productName: 'NITE JOGGER SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_06_standard.jpg'
    ],
    price: 120,
    color: 'black'
  },
  {
    productID: 2,
    productName: 'TIRO 19 TRAINING PANTS',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_25_outfit.jpg'
    ],
    price: 120,
    color: 'black'
  },
  {
    productID: 3,
    productName: 'ULTRABOOST SHOES',
    productType: `WOMEN'S RUNNING`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_06_standard.jpg'
    ],
    price: 100,
    color: 'black'
  },
  {
    productID: 4,
    productName: 'SOBAKOV SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_04_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_07_standard.jpg'
    ],
    price: 100,
    color: 'black'
  },
  {
    productID: 5,
    productName: 'PUREBOOST GO SHOES',
    productType: `MEN'S RUNNING`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Black/Pureboost_Go_Shoes_Black_B37803_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Black/Pureboost_Go_Shoes_Black_B37803_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Black/Pureboost_Go_Shoes_Black_B37803_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Black/Pureboost_Go_Shoes_Black_B37803_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Black/Pureboost_Go_Shoes_Black_B37803_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Black/Pureboost_Go_Shoes_Black_B37803_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Black/Pureboost_Go_Shoes_Black_B37803_06_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Black/Pureboost_Go_Shoes_Black_B37803_07_standard.jpg'
    ],
    price: 80,
    color: 'black'
  },
  {
    productID: 6,
    productName: 'SOBAKOV SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_06_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_07_standard.jpg'
    ],
    price: 90,
    color: 'black/white'
  },
  {
    productID: 7,
    productName: 'CROPPED HOODIE',
    productType: `WOMEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_41_detail.jpg'
    ],
    price: 90,
    color: 'pink'
  },
  {
    productID: 8,
    productName: 'SOBAKOV SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_06_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_07_standard.jpg'
    ],
    price: 140,
    color: 'black/white'
  },
  {
    productID: 9,
    productName: 'POD S3 SHOES',
    productType: `WOMEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_05_standard.jpg'
    ],
    price: 130,
    color: 'grey'
  },
  {
    productID: 10,
    productName: 'TIRO 19 TRAINING PANTS',
    productType: `WOMEN'S SOCCER`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_41_detail.jpg'
    ],
    price: 100,
    color: 'blue'
  },
  {
    productID: 11,
    productName: 'TIRO 19 TRAINING PANTS',
    productType: `WOMEN'S SOCCER`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_41_detail.jpg'
    ],
    price: 140,
    color: 'blue'
  },
  {
    productID: 12,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_06_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_07_standard.jpg'
    ],
    price: 80,
    color: 'white'
  },
  {
    productID: 13,
    productName: 'SOBAKOV SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_06_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_07_standard.jpg'
    ],
    price: 90,
    color: 'black/white'
  },
  {
    productID: 14,
    productName: 'TREFOIL HOODIE',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_25_outfit.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_41_detail.jpg'
    ],
    price: 110,
    color: 'blue'
  },
  {
    productID: 15,
    productName: 'ULTRABOOST SHOES',
    productType: `WOMEN'S RUNNING`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard.jpg'
    ],
    price: 100,
    color: 'white'
  },
  {
    productID: 16,
    productName: 'TREFOIL HOODIE',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_25_model.jpg'
    ],
    price: 120,
    color: 'black'
  },
  {
    productID: 17,
    productName: 'CROPPED HOODIE',
    productType: `WOMEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_02_laydown.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_25_model.jpg'
    ],
    price: 130,
    color: 'white'
  },
  {
    productID: 18,
    productName: 'PUREBOOST GO SHOES',
    productType: `MEN'S RUNNING`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_01_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_06_standard.jpg.png'
    ],
    price: 120,
    color: 'blue'
  },
  {
    productID: 19,
    productName: 'ULTRABOOST SHOES',
    productType: `WOMEN'S RUNNING`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_07_standard.jpg'
    ],
    price: 80,
    color: 'white'
  },
  {
    productID: 20,
    productName: 'TIRO 19 TRAINING PANTS',
    productType: `WOMEN'S SOCCER`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_41_detail.jpg'
    ],
    price: 80,
    color: 'blue'
  },
  {
    productID: 21,
    productName: 'SOBAKOV SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_06_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_07_standard.jpg'
    ],
    price: 120,
    color: 'black/white'
  },
  {
    productID: 22,
    productName: 'TIRO 19 TRAINING PANTS',
    productType: `WOMEN'S SOCCER`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_25_outfit.jpg'
    ],
    price: 80,
    color: 'black'
  },
  {
    productID: 23,
    productName: 'SWIFT RUN SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/Black/Swift_Run_Shoes_Black_AQ0863_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/Black/Swift_Run_Shoes_Black_AQ0863_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/Black/Swift_Run_Shoes_Black_AQ0863_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/Black/Swift_Run_Shoes_Black_AQ0863_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/Black/Swift_Run_Shoes_Black_AQ0863_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/Black/Swift_Run_Shoes_Black_AQ0863_06_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/Black/Swift_Run_Shoes_Black_AQ0863_06_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/Black/Swift_Run_Shoes_Black_AQ0863_06_standard.jpg'
    ],
    price: 120,
    color: 'black'
  },
  {
    productID: 24,
    productName: 'SOBAKOV SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_04_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_07_standard.jpg'
    ],
    price: 120,
    color: 'black'
  },
  {
    productID: 25,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: `MEN'S ESSENTIALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_06_standard.jpg'
    ],
    price: 130,
    color: 'black'
  },
  {
    productID: 26,
    productName: 'TREFOIL HOODIE',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_25_model.jpg'
    ],
    price: 90,
    color: 'black'
  },
  {
    productID: 27,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_06_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_07_standard.jpg'
    ],
    price: 110,
    color: 'white'
  },
  {
    productID: 28,
    productName: 'ULTRABOOST SHOES',
    productType: `WOMEN'S RUNNING`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_07_standard.jpg'
    ],
    price: 130,
    color: 'white'
  },
  {
    productID: 29,
    productName: 'ULTRABOOST SHOES',
    productType: `WOMEN'S RUNNING`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_06_standard.jpg'
    ],
    price: 120,
    color: 'black'
  },
  {
    productID: 30,
    productName: 'ULTRABOOST SHOES',
    productType: `WOMEN'S RUNNING`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_06_standard.jpg'
    ],
    price: 80,
    color: 'black'
  },
  {
    productID: 31,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_06_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_07_standard.jpg'
    ],
    price: 110,
    color: 'black'
  },
  {
    productID: 32,
    productName: 'PUREBOOST GO SHOES',
    productType: `MEN'S RUNNING`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_01_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_06_standard.jpg.png'
    ],
    price: 80,
    color: 'blue'
  },
  {
    productID: 33,
    productName: 'TREFOIL HOODIE',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_25_outfit.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_41_detail.jpg'
    ],
    price: 90,
    color: 'blue'
  },
  {
    productID: 34,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: `MEN'S ESSENTIALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_06_standard.jpg'
    ],
    price: 80,
    color: 'black'
  },
  {
    productID: 35,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: `MEN'S ESSENTIALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_06_standard.jpg'
    ],
    price: 120,
    color: 'white'
  },
  {
    productID: 36,
    productName: 'ULTRABOOST SHOES',
    productType: `WOMEN'S RUNNING`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_07_standard.jpg'
    ],
    price: 100,
    color: 'white'
  },
  {
    productID: 37,
    productName: 'ULTRABOOST SHOES',
    productType: `WOMEN'S RUNNING`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard.jpg'
    ],
    price: 110,
    color: 'white'
  },
  {
    productID: 38,
    productName: 'POD S3 SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_06_standard.jpg'
    ],
    price: 80,
    color: 'Mint'
  },
  {
    productID: 39,
    productName: 'TREFOIL HOODIE',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_25_model.jpg'
    ],
    price: 130,
    color: 'black'
  },
  {
    productID: 40,
    productName: 'NITE JOGGER SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3.console.aws.amazon.com/s3/object/fecadidas/Adidas%2520JPG/Nite%2520Jogger%2520Shoes%2520-%2520Men/White/Nite_Jogger_Shoes_White_BD7676_010_hover_standard.jpg?region=us-west-1&tab=overview',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/White/Nite_Jogger_Shoes_White_BD7676_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/White/Nite_Jogger_Shoes_White_BD7676_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/White/Nite_Jogger_Shoes_White_BD7676_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/White/Nite_Jogger_Shoes_White_BD7676_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/White/Nite_Jogger_Shoes_White_BD7676_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/White/Nite_Jogger_Shoes_White_BD7676_06_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/White/Nite_Jogger_Shoes_White_BD7676_07_standard.jpg'
    ],
    price: 130,
    color: 'white'
  },
  {
    productID: 41,
    productName: 'ULTRABOOST SHOES',
    productType: `WOMEN'S RUNNING`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard.jpg'
    ],
    price: 90,
    color: 'white'
  },
  {
    productID: 42,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: `MEN'S ESSENTIALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_06_standard.jpg'
    ],
    price: 80,
    color: 'black'
  },
  {
    productID: 43,
    productName: 'POD S3 SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_06_standard.jpg'
    ],
    price: 80,
    color: 'Mint'
  },
  {
    productID: 44,
    productName: 'CROPPED HOODIE',
    productType: `WOMEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_41_detail.jpg'
    ],
    price: 80,
    color: 'pink'
  },
  {
    productID: 45,
    productName: 'CROPPED HOODIE',
    productType: `WOMEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_02_laydown.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_25_model.jpg'
    ],
    price: 120,
    color: 'white'
  },
  {
    productID: 46,
    productName: 'POD S3 SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_05_standard.jpg'
    ],
    price: 90,
    color: 'grey'
  },
  {
    productID: 47,
    productName: 'TREFOIL HOODIE',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_25_model.jpg'
    ],
    price: 100,
    color: 'black'
  },
  {
    productID: 48,
    productName: 'SOBAKOV SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_04_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_07_standard.jpg'
    ],
    price: 130,
    color: 'black'
  },
  {
    productID: 49,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: `MEN'S ESSENTIALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_06_standard.jpg'
    ],
    price: 90,
    color: 'black'
  },
  {
    productID: 50,
    productName: 'TREFOIL HOODIE',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_25_outfit.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_41_detail.jpg'
    ],
    price: 80,
    color: 'blue'
  },
  {
    productID: 51,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_06_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_07_standard.jpg'
    ],
    price: 90,
    color: 'white'
  },
  {
    productID: 52,
    productName: 'ULTRABOOST SHOES',
    productType: `WOMEN'S RUNNING`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard.jpg'
    ],
    price: 120,
    color: 'white'
  },
  {
    productID: 53,
    productName: 'TREFOIL HOODIE',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_25_model.jpg'
    ],
    price: 80,
    color: 'black'
  },
  {
    productID: 54,
    productName: 'TREFOIL HOODIE',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_25_outfit.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_41_detail.jpg'
    ],
    price: 80,
    color: 'blue'
  },
  {
    productID: 55,
    productName: 'SOBAKOV SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_04_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_07_standard.jpg'
    ],
    price: 120,
    color: 'black'
  },
  {
    productID: 56,
    productName: 'PUREBOOST GO SHOES',
    productType: `MEN'S RUNNING`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_01_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_06_standard.jpg.png'
    ],
    price: 140,
    color: 'blue'
  },
  {
    productID: 57,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: `MEN'S ESSENTIALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_06_standard.jpg'
    ],
    price: 140,
    color: 'black'
  },
  {
    productID: 58,
    productName: 'NMD_R1 SHOES',
    productType: `WOMEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_Shoes_Blue_BD8030_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_Shoesview3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_Shoesview6.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_Shoeview.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_Shoeview2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_Shoeview2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_shoeview1.jpg'
    ],
    price: 140,
    color: 'blue'
  },
  {
    productID: 59,
    productName: 'TREFOIL HOODIE',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_25_model.jpg'
    ],
    price: 80,
    color: 'black'
  },
  {
    productID: 60,
    productName: 'TIRO 19 TRAINING PANTS',
    productType: `WOMEN'S SOCCER`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_25_outfit.jpg'
    ],
    price: 90,
    color: 'black'
  },
  {
    productID: 61,
    productName: 'POD S3 SHOES',
    productType: `WOMEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_05_standard.jpg'
    ],
    price: 120,
    color: 'grey'
  },
  {
    productID: 62,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_06_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_07_standard.jpg'
    ],
    price: 130,
    color: 'white'
  },
  {
    productID: 63,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: `MEN'S ESSENTIALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_06_standard.jpg'
    ],
    price: 90,
    color: 'white'
  },
  {
    productID: 64,
    productName: 'TIRO 19 TRAINING PANTS',
    productType: `WOMEN'S SOCCER`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_25_outfit.jpg'
    ],
    price: 90,
    color: 'black'
  },
  {
    productID: 65,
    productName: 'ULTRABOOST SHOES',
    productType: `WOMEN'S RUNNING`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard.jpg'
    ],
    price: 100,
    color: 'white'
  },
  {
    productID: 66,
    productName: 'TIRO 19 TRAINING PANTS',
    productType: `WOMEN'S SOCCER`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_41_detail.jpg'
    ],
    price: 110,
    color: 'blue'
  },
  {
    productID: 67,
    productName: 'POD S3 SHOES',
    productType: `WOMEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_05_standard.jpg'
    ],
    price: 110,
    color: 'grey'
  },
  {
    productID: 68,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_06_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_07_standard.jpg'
    ],
    price: 110,
    color: 'white'
  },
  {
    productID: 69,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_06_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_07_standard.jpg'
    ],
    price: 90,
    color: 'white'
  },
  {
    productID: 70,
    productName: 'TIRO 19 TRAINING PANTS',
    productType: `WOMEN'S SOCCER`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_41_detail.jpg'
    ],
    price: 120,
    color: 'blue'
  },
  {
    productID: 71,
    productName: 'POD S3 SHOES',
    productType: `WOMEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_05_standard.jpg'
    ],
    price: 110,
    color: 'grey'
  },
  {
    productID: 72,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_06_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_07_standard.jpg'
    ],
    price: 130,
    color: 'white'
  },
  {
    productID: 73,
    productName: 'PUREBOOST GO SHOES',
    productType: `MEN'S RUNNING`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_01_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_06_standard.jpg.png'
    ],
    price: 140,
    color: 'blue'
  },
  {
    productID: 74,
    productName: 'CROPPED HOODIE',
    productType: `WOMEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_02_laydown.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_25_model.jpg'
    ],
    price: 100,
    color: 'white'
  },
  {
    productID: 75,
    productName: 'CROPPED HOODIE',
    productType: `WOMEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_41_detail.jpg'
    ],
    price: 140,
    color: 'pink'
  },
  {
    productID: 76,
    productName: 'NMD_R1 SHOES',
    productType: `WOMEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/pinkShoe.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/pinkShoe2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView1.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView4.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView5.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeview6.jpg'
    ],
    price: 140,
    color: 'pink'
  },
  {
    productID: 77,
    productName: 'NMD_R1 SHOES',
    productType: `WOMEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/pinkShoe.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/pinkShoe2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView1.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView4.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView5.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeview6.jpg'
    ],
    price: 80,
    color: 'pink'
  },
  {
    productID: 78,
    productName: 'NITE JOGGER SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_06_standard.jpg'
    ],
    price: 90,
    color: 'black'
  },
  {
    productID: 79,
    productName: 'SOBAKOV SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_04_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_07_standard.jpg'
    ],
    price: 120,
    color: 'black'
  },
  {
    productID: 80,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: `MEN'S ESSENTIALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_06_standard.jpg'
    ],
    price: 130,
    color: 'white'
  },
  {
    productID: 81,
    productName: 'NITE JOGGER SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_06_standard.jpg'
    ],
    price: 110,
    color: 'black'
  },
  {
    productID: 82,
    productName: 'SWIFT RUN SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_06_standard.jpg'
    ],
    price: 120,
    color: 'white'
  },
  {
    productID: 83,
    productName: 'PUREBOOST GO SHOES',
    productType: `MEN'S RUNNING`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_01_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_06_standard.jpg.png'
    ],
    price: 90,
    color: 'blue'
  },
  {
    productID: 84,
    productName: 'SWIFT RUN SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_06_standard.jpg'
    ],
    price: 140,
    color: 'white'
  },
  {
    productID: 85,
    productName: 'ULTRABOOST SHOES',
    productType: `WOMEN'S RUNNING`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard.jpg'
    ],
    price: 110,
    color: 'white'
  },
  {
    productID: 86,
    productName: 'SOBAKOV SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_04_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_07_standard.jpg'
    ],
    price: 140,
    color: 'black'
  },
  {
    productID: 87,
    productName: 'ULTRABOOST SHOES',
    productType: `WOMEN'S RUNNING`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard.jpg'
    ],
    price: 120,
    color: 'white'
  },
  {
    productID: 88,
    productName: 'NMD_R1 SHOES',
    productType: `WOMEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/pinkShoe.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/pinkShoe2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView1.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView4.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView5.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeview6.jpg'
    ],
    price: 140,
    color: 'pink'
  },
  {
    productID: 89,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: `MEN'S ESSENTIALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_06_standard.jpg'
    ],
    price: 130,
    color: 'white'
  },
  {
    productID: 90,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_06_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_07_standard.jpg'
    ],
    price: 130,
    color: 'white'
  },
  {
    productID: 91,
    productName: 'NMD_R1 SHOES',
    productType: `WOMEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/pinkShoe.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/pinkShoe2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView1.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView4.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView5.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeview6.jpg'
    ],
    price: 140,
    color: 'pink'
  },
  {
    productID: 92,
    productName: 'SOBAKOV SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_04_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_07_standard.jpg'
    ],
    price: 110,
    color: 'black'
  },
  {
    productID: 93,
    productName: 'TREFOIL HOODIE',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_25_outfit.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_41_detail.jpg'
    ],
    price: 110,
    color: 'blue'
  },
  {
    productID: 94,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: `MEN'S ESSENTIALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_06_standard.jpg'
    ],
    price: 80,
    color: 'white'
  },
  {
    productID: 95,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: `MEN'S ESSENTIALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_06_standard.jpg'
    ],
    price: 90,
    color: 'white'
  },
  {
    productID: 96,
    productName: 'NITE JOGGER SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_06_standard.jpg'
    ],
    price: 110,
    color: 'black'
  },
  {
    productID: 97,
    productName: 'NMD_R1 SHOES',
    productType: `WOMEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_Shoes_Blue_BD8030_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_Shoesview3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_Shoesview6.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_Shoeview.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_Shoeview2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_Shoeview2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_shoeview1.jpg'
    ],
    price: 140,
    color: 'blue'
  },
  {
    productID: 98,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_06_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_07_standard.jpg'
    ],
    price: 130,
    color: 'white'
  },
  {
    productID: 99,
    productName: 'TREFOIL HOODIE',
    productType: `MEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_25_model.jpg'
    ],
    price: 120,
    color: 'black'
  },
  {
    productID: 100,
    productName: 'NMD_R1 SHOES',
    productType: `WOMEN'S ORIGINALS`,
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/pinkShoe.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/pinkShoe2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView1.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView4.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView5.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeview6.jpg'
    ],
    price: 120,
    color: 'pink'
  }
];

const seed = function(adidasInfo) {
  Adidas.insertMany(adidasInfo)
    .then(() => {
      console.log('Seeded Database');
      mongoose.connection.close(() => console.log('Closed Connection'));
    })
    .catch(err => console.error(err));
};

seed(data);
