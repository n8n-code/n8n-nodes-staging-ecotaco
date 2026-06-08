import type { INodeProperties } from 'n8n-workflow';

export const productsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					]
				}
			},
			"options": [
				{
					"name": "List All Products",
					"value": "List All Products",
					"action": "List all products",
					"description": "List all products",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/products"
						}
					}
				},
				{
					"name": "Get A Product",
					"value": "Get A Product",
					"action": "Get a Product",
					"description": "Get a Product",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/products/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /products",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"List All Products"
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
						"Products"
					],
					"operation": [
						"List All Products"
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
						"Products"
					],
					"operation": [
						"List All Products"
					]
				}
			}
		},
		{
			"displayName": "GET /products/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Get A Product"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Numeric `id` of the Product",
			"default": "1",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Get A Product"
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
						"Products"
					],
					"operation": [
						"Get A Product"
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
						"Products"
					],
					"operation": [
						"Get A Product"
					]
				}
			}
		},
];
