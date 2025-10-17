#pragma once

#include <JuceHeader.h>

class arpeggiatorComponent : public juce::Component

{

public:

    arpeggiatorComponent (juce::AudioProcessorValueTreeState& vts);

    ~arpeggiatorComponent() override;

    void paint (juce::Graphics&) override;

    void resized() override;

private:

    juce::AudioProcessorValueTreeState& valueTreeState;

    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (arpeggiatorComponent)

};
