import type { INodeProperties } from 'n8n-workflow';

export const adressesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Adresses"
					]
				}
			},
			"options": [
				{
					"name": "Get Autocomplete Places",
					"value": "Get Autocomplete Places",
					"action": "Get autocomplete places",
					"description": "For searching places just send the following attributes :\n\n- **longitude** (optional, float) : The location longitude for the seach\n\n- **latitude** (optional, float) : The location latitude for the seach\n\n- **search** (required, string) : The search text (most than 3 char)",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/addresses/places_autocomplete"
						}
					}
				},
				{
					"name": "Get Autocomplete Places Details",
					"value": "Get Autocomplete Places Details",
					"action": "Get autocomplete places details",
					"description": "Get autocomplete places details",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/addresses/places_details"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /addresses/places_autocomplete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Adresses"
					],
					"operation": [
						"Get Autocomplete Places"
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
						"Adresses"
					],
					"operation": [
						"Get Autocomplete Places"
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
						"Adresses"
					],
					"operation": [
						"Get Autocomplete Places"
					]
				}
			}
		},
		{
			"displayName": "POST /addresses/places_details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Adresses"
					],
					"operation": [
						"Get Autocomplete Places Details"
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
						"Adresses"
					],
					"operation": [
						"Get Autocomplete Places Details"
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
						"Adresses"
					],
					"operation": [
						"Get Autocomplete Places Details"
					]
				}
			}
		},
];
