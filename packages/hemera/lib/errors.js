'use strict'

/**
 * Copyright 2016-present, Dustin Deus (deusdustin@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const SuperError = require('super-error')

const HemeraError = SuperError.subclass('HemeraError')
const ParseError = HemeraError.subclass('HemeraParseError')
const TimeoutError = HemeraError.subclass('TimeoutError')
const ImplementationError = HemeraError.subclass('ImplementationError')
const BusinessError = HemeraError.subclass('BusinessError')
const FatalError = HemeraError.subclass('FatalError')
const PatternNotFound = HemeraError.subclass('PatternNotFound')
const PayloadValidationError = SuperError.subclass('PayloadValidationError')

module.exports = {
  HemeraError,
  ParseError,
  TimeoutError,
  ImplementationError,
  BusinessError,
  FatalError,
  PatternNotFound,
  PayloadValidationError
}
