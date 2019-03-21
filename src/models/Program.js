const domain = process.env.DOMAIN_NAME || '';
const port = process.env.SERVER_PORT || '';
const imagePath = process.env.IMAGE_PATH || '';
// Using fixed object for demo
const DEMO_PROGRAM = {
  title: '免费午餐小善大爱',
  subtitle: '达成目标竞猜娱乐场将为小朋友支持37500份免费午餐',
  imageSrc: `${domain}:${port}/${imagePath}/test.png`,
  programTargetNumber: 15000000,
  programTargetText: '爱心筹集目标数量',
  programRasiedNumber: 1234825,
  programRasiedText: '已筹集爱心数量',
  userDonationNumber: 5600,
  userDonationText: '累计献出的爱心',
  userContributionNumber: 0.14,
  userContributionText: '为项目贡献',
  userContributionUnit: '份午餐',
  readMoreUrl: '#'
};

// Handles Interactions with Program Model
class Program {
  /**
   * Find a unique Program with given id
   *
   * @param {string} id
   * @returns
   * @memberof Program
   */
  findOne(id) {
    return Promise.resolve(DEMO_PROGRAM);
  }

  /**
   * Find Programs with given query
   *
   * @param {string} query
   * @returns []
   * @memberof Program
   */
  find(query) {
    return Promise.resolve([DEMO_PROGRAM]);
  }
}

module.exports = new Program();
