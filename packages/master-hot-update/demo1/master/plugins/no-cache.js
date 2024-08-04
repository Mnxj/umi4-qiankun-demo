// module.exports = (api) => {
//    api.describe({
//       key: 'noCache',
//       config: {
//         default: false,
//       },
//     });
  
//     api.modifyAppData(async (memo) => {
//       return {
//         ...memo,
//         onBeforeMiddlewares: [
//           ...(memo.onBeforeMiddlewares || []),
//           (req, res, next) => {
//             res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
//             res.setHeader('Pragma', 'no-cache');
//             res.setHeader('Expires', '0');
//             next();
//           },
//         ],
//       };
//     });
//  };