/*
Imagine we have an image. We'll represent this image as a simple 2D array where every pixel is a 1 or a 0

Write a function that takes in the image and returns the coordinates of the 0 rectangle -- top-left and bottom-right; or top-left, width and height.


// Background info/context
- write function 
  - takes in image represented by 2d array with 0, 1
  - return the coord of 0 rectangle top-left, width and height

const image4 = [
[1, 1, 1, 1, 1], image4[0]
[1, 0, 0, 0, 1], image4[1]
[1, 0, 0, 0, 1], image4[2]
[1, 0, 0, 0, 1], image4[3]
[1, 1, 1, 1, 1], image4[4]
]

const image2 = [
  [0],
];

const image3 = [
  [1],
];

image1 = [
[0, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1],
[0, 1, 1, 0, 0, 0, 1],
[1, 0, 1, 0, 0, 0, 1],
[1, 0, 1, 1, 1, 1, 1],
[1, 0, 1, 0, 0, 1, 1],
[1, 1, 1, 0, 0, 1, 1],
[1, 1, 1, 1, 1, 1, 0],
]

image1 = [
[1, 0, 0, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1],
[0, 0, 1, 0, 0, 0, 1], // instead of returning, push to topleft array
[0, 0, 1, 0, 0, 0, 1], // to determine if top left is valid, check left and top != 1
[1, 0, 1, 1, 1, 1, 1],
[1, 1, 1, 0, 0, 1, 1],
[1, 1, 1, 0, 0, 1, 1],
[1, 1, 1, 1, 1, 1, 1],
]
*/


// row = j
// column = i
class Image {
  
    constructor(image) {
      this.originalImage = image;
      this.generateAttributes()
    }

    generateAttributes() {
        this.rowLength = this.originalImage.length;
        this.columnLength = this.originalImage[0].length; 
    }
  
    getTopLeft() {
        let topLeftList = [];
        for (let i = 0; i < this.rowLength; i++) {
            for (let j = 0; j < this.columnLength; j++) {
                if (this.originalImage[i][j] === 0) {
                    let leftJIdx = j - 1;
                    let topIIdx = i - 1;

                    if (leftJIdx < 0) { // if left is outside of bound, only check top
                        if (topIIdx < 0 ) {
                            topLeftList.push({
                                x: i,
                                y: j
                            });
                        } else {
                            let topValue = this.originalImage[topIIdx][j]
                            if (topValue === 1) {
                                topLeftList.push({
                                    x: i,
                                    y: j
                                });
                            }
                        }
                    } else if (topIIdx < 0 && this.originalImage[i][leftJIdx] === 1) {
                        topLeftList.push({
                            x: i,
                            y: j
                        });
                    } else if (this.originalImage[topIIdx][j] === 1 && this.originalImage[i][leftJIdx] === 1) {
                        topLeftList.push({
                            x: i,
                            y: j
                        });
                    }
                }
            }
        }
        this.topLeftList = topLeftList;
        return topLeftList;
    }

    getHeight(topLeft) {
        let heightCounter = 0;
        let x = topLeft.x;
        let y = topLeft.y;
        while (x <= this.columnLength && this.originalImage[x][y] === 0) {
            heightCounter++;
            x++;
        }
        this.height = heightCounter;
        return this.height;
    }

    getWidth(topLeft) {
        let widthCounter = 0;
        let x = topLeft.x;
        let y = topLeft.y;
        while (y <= this.rowLength && this.originalImage[x][y] === 0) {
            widthCounter++;
            y++;
        }
        this.width = widthCounter;
        return this.width;
    }

    getRectangles() {
        let result = []
        this.topLeftList.forEach((topLeft) =>{
            let width = this.getWidth(topLeft);
            let height = this.getHeight(topLeft);
            result.push({
                ...topLeft,
                width,
                height
            })
        })
        return result;
    }
  }

  const image1 = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1], 
    [1, 0, 0, 0, 1], 
    [1, 1, 1, 1, 1], 
    ]

    const image8 = [
        [0, 0, 1, 1, 1],
        [0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1], 
        [1, 1, 1, 1, 1], 
        [1, 1, 1, 1, 1], 
        ]

    const image2 = [
        [0],
      ];
      
      const image3 = [
        [1],
      ];


      const image5 = [
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        ]

        const image6 = [
            [0, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 0, 0, 0, 1],
            [1, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1],
            [1, 0, 1, 0, 0, 1, 1],
            [1, 1, 1, 0, 0, 1, 1],
            [1, 1, 1, 1, 1, 1, 0],
            ]


  let test1 = new Image(image6);
  console.log(test1.getTopLeft())
  console.log(test1.getRectangles());
//   console.log(`width: ${test1.getWidth()}`)
//   console.log(`height: ${test1.getHeight()}`)