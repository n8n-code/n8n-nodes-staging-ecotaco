import type { INodeProperties } from 'n8n-workflow';

export const ridesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Rides"
					]
				}
			},
			"options": [
				{
					"name": "Get A Ride",
					"value": "Get A Ride",
					"action": "Get a ride",
					"description": "Get a ride",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rides/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Cancel A Ride",
					"value": "Cancel A Ride",
					"action": "Cancel a Ride",
					"description": "**Must be authenticate**",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rides/{{$parameter[\"id\"]}}/cancel"
						}
					}
				},
				{
					"name": "Cancel Fee Of A Ride",
					"value": "Cancel Fee Of A Ride",
					"action": "Cancel fee of a Ride",
					"description": "**Must be authenticate**",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rides/{{$parameter[\"id\"]}}/cancel_fees"
						}
					}
				},
				{
					"name": "Estimate A Ride",
					"value": "Estimate A Ride",
					"action": "Estimate a ride",
					"description": "Estimate a ride",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rides/{{$parameter[\"id\"]}}/estimate"
						}
					}
				},
				{
					"name": "Reserve A Ride",
					"value": "Reserve A Ride",
					"action": "Reserve a ride",
					"description": "To book, the ride must belong to the connected user. The ride must have a main passenger at least, the booking user id and the payment hash must be set.\n\n**Must be authenticate**",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/rides/{{$parameter[\"id\"]}}/reserve"
						}
					}
				},
				{
					"name": "Get All User Rides",
					"value": "Get All User Rides",
					"action": "Get all user rides",
					"description": "Get all user rides",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rides?page={{$parameter[\"page\"]}}&per_page={{$parameter[\"per_page\"]}}"
						}
					}
				},
				{
					"name": "Create A Ride",
					"value": "Create A Ride",
					"action": "Create a ride",
					"description": "Create a ride",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/rides?page={{$parameter[\"page\"]}}&per_page={{$parameter[\"per_page\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /rides/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rides"
					],
					"operation": [
						"Get A Ride"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Numeric `id` of Ride",
			"default": "1",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Rides"
					],
					"operation": [
						"Get A Ride"
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
						"Rides"
					],
					"operation": [
						"Get A Ride"
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
						"Rides"
					],
					"operation": [
						"Get A Ride"
					]
				}
			}
		},
		{
			"displayName": "GET /rides/{id}/cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rides"
					],
					"operation": [
						"Cancel A Ride"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Numeric `id` of Ride",
			"default": "1",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Rides"
					],
					"operation": [
						"Cancel A Ride"
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
						"Rides"
					],
					"operation": [
						"Cancel A Ride"
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
						"Rides"
					],
					"operation": [
						"Cancel A Ride"
					]
				}
			}
		},
		{
			"displayName": "GET /rides/{id}/cancel_fees",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rides"
					],
					"operation": [
						"Cancel Fee Of A Ride"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Numeric `id` of Ride",
			"default": "1",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Rides"
					],
					"operation": [
						"Cancel Fee Of A Ride"
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
						"Rides"
					],
					"operation": [
						"Cancel Fee Of A Ride"
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
						"Rides"
					],
					"operation": [
						"Cancel Fee Of A Ride"
					]
				}
			}
		},
		{
			"displayName": "GET /rides/{id}/estimate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rides"
					],
					"operation": [
						"Estimate A Ride"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Numeric `id` of Ride",
			"default": "1",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Rides"
					],
					"operation": [
						"Estimate A Ride"
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
						"Rides"
					],
					"operation": [
						"Estimate A Ride"
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
						"Rides"
					],
					"operation": [
						"Estimate A Ride"
					]
				}
			}
		},
		{
			"displayName": "POST /rides/{id}/reserve",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rides"
					],
					"operation": [
						"Reserve A Ride"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Numeric `id` of Ride",
			"default": "1",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Rides"
					],
					"operation": [
						"Reserve A Ride"
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
						"Rides"
					],
					"operation": [
						"Reserve A Ride"
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
						"Rides"
					],
					"operation": [
						"Reserve A Ride"
					]
				}
			}
		},
		{
			"displayName": "GET /rides?page={page}&per_page={per_page}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rides"
					],
					"operation": [
						"Get All User Rides"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"required": true,
			"description": "Number of the page to load",
			"default": "1",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Rides"
					],
					"operation": [
						"Get All User Rides"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"required": true,
			"description": "Number of items per page to load",
			"default": "1",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Rides"
					],
					"operation": [
						"Get All User Rides"
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
						"Rides"
					],
					"operation": [
						"Get All User Rides"
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
						"Rides"
					],
					"operation": [
						"Get All User Rides"
					]
				}
			}
		},
		{
			"displayName": "POST /rides?page={page}&per_page={per_page}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rides"
					],
					"operation": [
						"Create A Ride"
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
						"Rides"
					],
					"operation": [
						"Create A Ride"
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
						"Rides"
					],
					"operation": [
						"Create A Ride"
					]
				}
			}
		},
];
