---
title: This is my first post.
description: This is a post on My Blog about agile frameworks.
date: 2018-05-01
tags: another tag
---
My first post.

Sample C++ code:

```cpp
int sysinfo_processes(cJSON** js_result)
{
    auto retVal { -1 };

    try
    {
        if (js_result)
        {
            SysInfo info;
            const auto& processes   {info.processes()};
            *js_result = cJSON_Parse(processes.dump().c_str());
            retVal = 0;
        }
    }
    // LCOV_EXCL_START
    catch (...)
    {}

    // LCOV_EXCL_STOP

    return retVal;
}
int sysinfo_networks(cJSON** js_result)
{
    auto retVal { -1 };

    try
    {
        if (js_result)
        {
            SysInfo info;
            const auto& networks    {info.networks()};
            *js_result = cJSON_Parse(networks.dump().c_str());
            retVal = 0;
        }
    }
    // LCOV_EXCL_START
    catch (...)
    {}

    // LCOV_EXCL_STOP

    return retVal;
}
int sysinfo_ports(cJSON** js_result)
{
    auto retVal { -1 };

    try
    {
        if (js_result)
        {
            SysInfo info;
            const auto& ports       {info.ports()};
            *js_result = cJSON_Parse(ports.dump().c_str());
            retVal = 0;
        }
    }
    // LCOV_EXCL_START
    catch (...)
    {}

    // LCOV_EXCL_STOP

    return retVal;
}
```
