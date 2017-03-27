var rootInput = './src/';
var rootOutput = './dist/';

module.exports = {
  /*编译到的路径*/
  'output': rootOutput,
  /*是否压缩*/
  'isCompress': false,
  /*在public-fns中替换对应的字符*/
  'port': 8088,
  'replace': {
    'output': rootOutput
  },
  'lib': {
    'input': [rootInput + 'libs/*'],
    'watch': [rootInput + 'libs/*']
  },
  'html': {
    'input': [rootInput + '**/*+(main|index|html)*.html'],
    'watch': [rootInput + '**/*.html']
  },
  'style': {
    'input': [rootInput + '**/*+(main).scss'],
    'watch': [rootInput + '**/*+(scss|css)', '!' + rootInput + 'libs/*']
  },
  'script': {
    'input': [rootInput + '**/*+(main).js'],
    'watch': [rootInput + '**/*.js', '!' + rootInput + 'libs/*']
  },
  'image': {
    'input': [rootInput + '**/*.{png,jpg,gif,ico}'],
    'watch': [rootInput + '**/*.+(jpeg|jpg|png|ico)']
  },
  'api': {
    'input': [rootInput + 'apis/*']
  },
  'rev': {
    'input': [rootOutput + '**/*.+(js|html|css)'],
    /*替换后的路径前缀*/
    'realityPath': './'
  }
};
