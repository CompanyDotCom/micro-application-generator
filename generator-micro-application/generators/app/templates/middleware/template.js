/**
 * @typedef Options
 * @property {boolean} isBulk
 * @property {string} eventType
 * @property {string} service
 */

/**
 * @typedef MicroAppMessage
 * @property message - standard message object with payload, context and metadata
 * @property attributes
 */

/**
 * @typedef HandledMicroAppMessage
 * @extends MicroAppMessage
 * @property workerResp - the object returned from a worker function
 */

/**
 * A custom middleware must return at least one of a before, after or onError function.  Returning a value from any of these function will interrupt execution of core microApp code, do not do this
 * @param {Options} options
 * @returns
 */
export default options => {
  const middlewareName = '<%- middlewareName %>';
  /**
   * This code will be executed before your worker.  To supply additional data with your message to the worker, assign it to the microApp message object
   * @param {Array<MicroAppMessage>} request.event
   * @returns {void}
   */
  const before = request => {
  };

  /**
   * This code will be executed after your worker - you may access your worker response on each HandledMicroAppMessage
   * @param {Array<MicroAppMessage>} request.event
   * @param {Array<HandledMicroAppMessage>?} request.response
   * @returns {void}
   */
  const after = request => {

  };

  /**
   * This code will be executed after your worker - you may access your worker response on each HandledMicroAppMessage
   * @param {Error} request.error
   * @param {Array<MicroAppMessage>} request.event?
   * @param {Array<MicroAppMessage>?} request.response
   * @returns {void}
   */
  const onError = request => {

  };

  return {
    before,
    after,
    onError,
  };
};
