#pragma once

#include <JuceHeader.h>

class unisonComponent : public juce::Component

{

public:

    unisonComponent (juce::AudioProcessorValueTreeState& vts);

    ~unisonComponent() override;

    void paint (juce::Graphics&) override;

    void resized() override;

private:

    juce::AudioProcessorValueTreeState& valueTreeState;

    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (unisonComponent)

};
