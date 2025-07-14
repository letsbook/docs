---
slug: security-update-2-3-2
title: Security Update v2.3.2 - Important Security Patches
---

# Security Update v2.3.2 - Important Security Patches

This is a critical security update that addresses several important vulnerabilities. We strongly recommend all users update to this version immediately.

<!-- truncate -->

## 🔒 Security Fixes

### Authentication Security
- **Enhanced password security**: Implemented stronger password hashing algorithms
- **Session management**: Improved session token validation and expiration handling
- **Two-factor authentication**: Fixed vulnerability in 2FA verification process

### Data Protection
- **API security**: Patched potential data exposure in booking API endpoints
- **Input validation**: Strengthened validation for user-submitted data
- **SQL injection prevention**: Additional safeguards against database attacks

## 🐛 Additional Bug Fixes

- Fixed memory leak in venue image loading
- Resolved issue with duplicate booking notifications
- Corrected timezone handling for international bookings

## 📋 Action Required

- **Web users**: No action required - updates are automatically applied
- **Mobile app users**: Please update to the latest version from your app store
- **API users**: Review our updated [security guidelines](/docs/api/security)

## 🔍 Vulnerability Details

For detailed information about the vulnerabilities addressed in this release, please refer to our [security advisory](https://lets-book.com/security/advisory-2024-06-25).

---

*This update was released on June 25, 2024. For security-related questions, please contact security@lets-book.com*
