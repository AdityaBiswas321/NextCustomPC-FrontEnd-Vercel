//Needed to use Next/Images for optimized images

module.exports = {
  images: {
    domains: ["secondbucketforcustompc.s3.us-east-2.amazonaws.com"],
  },
};

// module.exports = {
//   images: {
//     loader: 'imgix',
//     path: 'secondbucketforcustompc.s3.us-east-2.amazonaws.com'
//   },
//   exportPathMap: function () {
//     return {
//       '/': { page: '/'}
//     }
//   }
// }
