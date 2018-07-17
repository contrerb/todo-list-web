import React from "react";
import { LayoutGrid, LayoutGridCell } from "@cdk-uip/react-layout-grid";
import {
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardText
} from "@cdk-uip/react-card";

const licenses = [
  {
    name: "React",
    copyright: "Copyright (c) 2013-present, Facebook, Inc.",
    legal: [
      "* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.",
      "* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.",
      "* Neither the name Facebook nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.",
      'THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.'
    ]
  },
  {
    name: "Redux / Redux Thunk",
    copyright: "Copyright (c) 2015 Dan Abramov",
    legal: [
      'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:',
      "The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.",
      'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'
    ]
  },
  {
    name: "react-intl",
    copyright: "Copyright 2014 Yahoo Inc. All rights reserved.",
    legal: [
      "* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.",
      "* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.",
      "* Neither the name Yahoo, Inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.",
      'THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.'
    ]
  }
];

const Licenses = () => (
  <LayoutGrid>
    {licenses.map((license, index) => (
      <LayoutGridCell key={index} span={4}>
        <Card>
          <CardHeader>
            <CardTitle>{license.name}</CardTitle>
            <CardSubtitle>{license.copyright}</CardSubtitle>
          </CardHeader>
          {license.legal.map((text, index) => (
            <CardText key={index}>{text}</CardText>
          ))}
        </Card>
      </LayoutGridCell>
    ))}
  </LayoutGrid>
);

export default Licenses;