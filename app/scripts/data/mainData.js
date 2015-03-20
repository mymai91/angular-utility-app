'use strict';

angular.module('utilityApp')
  .constant ('homeContents', [
    {
      title: 'Draw Chart',
      href: 'drawchart',
      detail: 'This is an example about drawchart, with input are points to draw and output will be a chart.'
    },
    {
      title: 'Draw multi chart',
      href: 'drawchart',
      detail: 'This is an example about drawchart, with input are array contain maps point and output will be show more chart'
    },
    {
      title: 'Markdown',
      href: 'markdown',
      detail: 'This is an example about Markdown, with input is content contain markdown and output will show content is converted markdown.'
    }
  ]);