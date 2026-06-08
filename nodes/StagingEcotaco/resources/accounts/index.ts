import type { INodeProperties } from 'n8n-workflow';

export const accountsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					]
				}
			},
			"options": [
				{
					"name": "Get Current User",
					"value": "Get Current User",
					"action": "Get current user",
					"description": "Get current user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accounts"
						}
					}
				},
				{
					"name": "Create A New Account With An Application Key",
					"value": "Create A New Account With An Application Key",
					"action": "Create a new account with an application key",
					"description": "Create a new account with an application key",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts"
						}
					}
				},
				{
					"name": "Update User",
					"value": "Update User",
					"action": "Update User",
					"description": "Update User",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/accounts"
						}
					}
				},
				{
					"name": "Forget Password With Email",
					"value": "Forget Password With Email",
					"action": "Forget password with email",
					"description": "Forget password with email",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/password"
						}
					}
				},
				{
					"name": "Payment Methods",
					"value": "Payment Methods",
					"action": "Payment Methods",
					"description": "Payment Methods",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accounts/payment_methods"
						}
					}
				},
				{
					"name": "Settings",
					"value": "Settings",
					"action": "Settings",
					"description": "Settings",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/settings"
						}
					}
				},
				{
					"name": "Login With Email Password And Application Key",
					"value": "Login With Email Password And Application Key",
					"action": "Login with email, password and application key",
					"description": "Login with email, password and application key",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/accounts/sign_in"
						}
					}
				},
				{
					"name": "Update Password",
					"value": "Update Password",
					"action": "Update Password",
					"description": "Update Password",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/accounts/update_password"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /accounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Get Current User"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"description": "e.g. application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Get Current User"
					]
				}
			}
		},
		{
			"displayName": "Accept Language",
			"name": "Accept-Language",
			"description": "e.g. en",
			"default": "en",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept-Language": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Get Current User"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Create A New Account With An Application Key"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"description": "e.g. application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Create A New Account With An Application Key"
					]
				}
			}
		},
		{
			"displayName": "Accept Language",
			"name": "Accept-Language",
			"description": "e.g. en",
			"default": "en",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept-Language": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Create A New Account With An Application Key"
					]
				}
			}
		},
		{
			"displayName": "PUT /accounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"description": "e.g. application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Accept Language",
			"name": "Accept-Language",
			"description": "e.g. en",
			"default": "en",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept-Language": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/password",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Forget Password With Email"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"description": "e.g. application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Forget Password With Email"
					]
				}
			}
		},
		{
			"displayName": "Accept Language",
			"name": "Accept-Language",
			"description": "e.g. en",
			"default": "en",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept-Language": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Forget Password With Email"
					]
				}
			}
		},
		{
			"displayName": "GET /accounts/payment_methods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Payment Methods"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"description": "e.g. application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Payment Methods"
					]
				}
			}
		},
		{
			"displayName": "Accept Language",
			"name": "Accept-Language",
			"description": "e.g. en",
			"default": "en",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept-Language": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Payment Methods"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Settings"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"description": "e.g. application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Settings"
					]
				}
			}
		},
		{
			"displayName": "Accept Language",
			"name": "Accept-Language",
			"description": "e.g. en",
			"default": "en",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept-Language": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /accounts/sign_in",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Login With Email Password And Application Key"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"description": "e.g. application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Login With Email Password And Application Key"
					]
				}
			}
		},
		{
			"displayName": "Accept Language",
			"name": "Accept-Language",
			"description": "e.g. en",
			"default": "en",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept-Language": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Login With Email Password And Application Key"
					]
				}
			}
		},
		{
			"displayName": "PUT /accounts/update_password",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Update Password"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"description": "e.g. application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Update Password"
					]
				}
			}
		},
		{
			"displayName": "Accept Language",
			"name": "Accept-Language",
			"description": "e.g. en",
			"default": "en",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept-Language": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Update Password"
					]
				}
			}
		},
];
