# Environment API

The Environment API helps you manage your environment.

- [Environments](#environments)
- [Precedence](#precedence)
- [Using WfEnv](#using-wfenv)
    
## Environments
Wavefront has two default environments: 
- `dev`
- `prod`
  
You can add as many additional environments as necessary, which can inherit behaviors from either _prod_ or _dev_.
E.g.
- _"custom:dev"_
- _"staging-2:prod"_
- _"e2e:dev"_

Custom dev environments must proceed with the parent environment in all usage. For example, you would use _"stage-2:prod"_ globally not _"stage-2"_.

## Precedence 
1. **Headers**: The highest determining factor of the environment is the optional `Wavefront-Env` HTTP header. It can be set to `dev`, `prod`, or a custom environment name.
2. **Meta tag**: By manually or dynamically setting the meta tag `<meta name="environment" content="dev">`, Wavefront will automatically recognize the environment.
3. **.wf_env**: The `wf_env` file should be at the root of the project domain; it should only contain `env=dev`. It should be updated during build-time.
4. **WfEnv.set(<env>)**: This will only work when served via _localhost_ or _127.0.0.1_.

For example: 
- If headers are defined, they will proceed over all other methods.
- If `Wavefront-Env` was not found, the meta tag would proceed over other methods.
- If neither headers nor the meta environment content value is found, Wavefront will look for the `.wf_env` endpoint.
- If the wf_env endpoint is not found, Wavefront will respect the WfEnv function.

For efficiency, you can reorder and skip methods. `WfEnv.define()` takes an array of the methods to use, in order.
```javascript
import { wfEnv } from './wavefront.js'

wfEnv.define(['set', 'meta'])
```
## Using WfEnv 
```javascript
import { WfEnv } from './wavefront.js'

WfEnv.set('prod')                // Set new or existing environment
WfEnv.set('custom:prod')         // Set and create a custom environment that inherits internal rules from prod
const env = WfEnv.get()          // Get environment
const source = WfEnv.source()    // Get source of environment: "header" | "meta" | "wf_env" | "set"
```
