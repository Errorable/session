'use strict';
var assert = require('assert');
var errorable = require('errorable');
var errorableSession = require('../lib');
var Generator = errorable.Generator;
var cnErrors = new Generator(errorableSession, 'zh-CN').errors;
var enUsErrors = new Generator(errorableSession, 'en-US').errors;

describe('errorable-session', function () {
  it('should have session errors in zh-CN!', function () {
    assert.equal(true, cnErrors.SessionNotFound.message === '会话(Session)未找到！');
    assert.equal(true, cnErrors.SessionMiddlewareNotFound.message === '会话(Session)中间件未找到！');
    assert.equal(true, cnErrors.SessionExpired.message === '会话(Session)已经过期！');
  });

  it('should have session errors in en-US!', function () {
    assert.equal(true, enUsErrors.SessionNotFound.message === 'Session Not Found!');
    assert.equal(true, enUsErrors.SessionMiddlewareNotFound.message === 'Session Middleware Not Found!');
    assert.equal(true, enUsErrors.SessionExpired.message === 'Session Expired!');
  });
});
