#!/usr/bin/env node
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.argv._
 */

'use strict';

const npmLock = require('../lib/treat-fields/npm.lock');
const yarnLock = require('../lib/treat-fields/yarn.lock');
const program = require('commander');
program
.option('--registry <value>', 'set the npm registry, specially for yarn')
.option('--https-proxy <value>', 'set the https-proxy')
.option('--proxy <value>', 'set the proxy');
program.parse(process.argv);
console.log(program.opts());

function run(folderPath, outputFolder = folderPath) {
    console.log("Treating fields...");
    npmLock.run(folderPath, outputFolder);
    yarnLock.run(folderPath, outputFolder, program.registry);
}

module.exports.run = run;